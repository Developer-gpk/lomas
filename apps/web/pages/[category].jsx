import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import Layout from '../src/Layout/Layout'
import BannerCategory from '../src/Components/BannerCategory/BannerCategory'
import BannerCategoryFooter from '../src/Components/BannerCategoryFooter/BannerCategoryFooter'
import SearchCategoryDesk from '../src/Components/SearchCategory/SearchCategoryDesk'
import SearchCategoryMobile from '../src/Components/SearchCategory/SearchCategoryMobile'
import sanityClient from '../libs/Client'
import { M2_Const, Rec, Banios_comp, Arrow1 } from 'ui/constants'
const builder = imageUrlBuilder(sanityClient)


function Category(){
    const [search, setSearch] = useState(null)
    const [update, setUpdate] = useState(null)
    const route = useRouter()
    const ubi = String(route.query.ubicacion)
    const tipo = String(route.query.tipo)
    const habi = route.query.habitaciones
    const min = Math.floor(route.query.min)
    const max = Math.floor(route.query.max)
    const category = route.query.category
    function urlForce(soruce){
        const img = builder.image(soruce)
        return img
    }
    function fetchPropieadesWithOutFilter(){
        if(update == search){
            sanityClient.fetch(
                `*[_type == "propiedades" && categoria->.slug.current == $category] | order(_id) [0..11]{
                    ...,
                    categoria->
                }`, {category}
            )
            .then((data) =>{
                setSearch(data)
                setUpdate(data)
            })
            .catch(console.error);
        }
    }
    function fetchPropieadesWithFilter(){
        if(update == search){
            sanityClient.fetch(
                `*[_type == "propiedades" && categoria->.slug.current == $category && ubicacion->.slug.current == $ubi && availability == $tipo && bathroom == $habi && sale > $min && sale < $max]| order(_id) [0..11]{
                    ...,
                    categoria->,
                    ubicacion->
                }`, {category, ubi, tipo, habi, min, max}
            )
            .then((data) =>{
                setSearch(data)
                setUpdate(data)
            })
            .catch(console.error);
        }
    }
    useEffect(() => {
        if(ubi == null || tipo == null || habi == null || min == null || max == null){
            fetchPropieadesWithOutFilter()
        } else {
            fetchPropieadesWithFilter()
        }
	}, [update, search, category, ubi, tipo, habi, min, max]);
    return(
        <Layout>
            <section className='block' id='category-banner'>
                <BannerCategory category={route.query.category} />
                <div className='holder'>
                    <div className='container-fluid'>

                    </div>
                </div>
            </section>
            <section className='block' id='form'>
                <div className='holder'>
                    <div className='container-fluid'>
                        <SearchCategoryDesk />
                        <SearchCategoryMobile />
                    </div>
                </div>
            </section>
            <section className='block' id='category-propiedades'>
                <div className='holder'>
                    <div className='container-fluid'>
                        <ul className='propiedades'>
                            {search?.map((propiedad, index) =>(
                                <li className='propiedad card' key={index}>
                                    {propiedad.imagesGallery?.map((img, index) => (
                                        index <= 0 ?
                                            <Image src={urlForce(img.asset).url()} width={416} height={289} layout={"responsive"} className="card-img-top" alt={propiedad?.name} key={index} />
                                        : null
                                    ))}
                                    <div className="card-body">
                                        <div className='row d-inline-block'>
                                            <span className='text-uppercase'>{propiedad?.categoria?.category}</span>
                                            <span className='text-uppercase'>{propiedad?.availability}</span>
                                        </div>
                                        <h5 className="card-title">{propiedad?.name}</h5>
                                        <p className="card-text">{propiedad?.address}</p>
                                        <h4 className="price">${propiedad?.sale}</h4>
                                        <div className='row comp'>
                                            <div className='col'><Image src={M2_Const} alt="pin" width="16" height="16" layout={"fixed"} />{propiedad?.construction > 0 ? <>{propiedad?.construction}</> : <>0</>}<span>m2</span></div>
                                            <div className='col'><Image src={Rec} alt="pin" width="16" height="16" layout={"fixed"} /> {propiedad?.bedrooms > 0 ? <>{propiedad?.bedrooms}</> : <>0</> } <span>Rec.</span></div>
                                            <div className='col'><Image src={Banios_comp} alt="pin" width="16" height="16" layout={"fixed"} />{propiedad?.bathroom > 0 ? <>{propiedad?.bathroom}</> : <>0</>}<span>Baños comp.</span></div>
                                        </div>
                                        <div className='row my-2 btn-propi'>
                                            <Link  href={{ pathname: '/propiedad/[slug]', query: { slug: propiedad.slug.current }}}>
                                                <a>Ver propiedad <Image src={Arrow1} alt="pin" width="13" height="12" layout={"fixed"} /></a>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section className='block' id='empieza'>
                <div className='holder'>
                <BannerCategoryFooter category={route.query.category} />
                    <div className='container-fluid'>

                    </div>
                </div>
            </section>
            <section className='block' id="lugares">
                <div className='holder'>
                    <div className='row mx-auto'>
                        <div className='col-md-2 col-12'>
                            <h4>Casas en Venta Puebla</h4>
                            <ul>
                                <li><a>Casas en Venta en Lomas de Angelópolis</a></li>
                                <li><a>Casas en Venta Recta a Cholula</a></li>
                                <li><a>Casas en Venta en Forjadores</a></li>
                                <li><a>Casas en Venta en San Andrés Cholula</a></li>
                                <li><a>Casas en Venta en Cuautlancingo</a></li>
                                <li><a>Casas en Venta en Momoxpan</a></li>
                            </ul>
                        </div>
                        <div className='col-md-2 col-12'>
                            <h4>Terreno en Venta en Puebla</h4>
                            <ul>
                                <li><a>Terrenos en Venta en Lomas de Angelópolis</a></li>
                                <li><a>Terrenos en Venta en San Andrés Cholula </a></li>
                                <li><a>Terrenos en Venta en San Martín Texmelucan</a></li>
                                <li><a>Terrenos en Venta Bioparque Estrella</a></li>
                            </ul>
                        </div>
                        <div className='col-md-2 col-12'>
                            <h4>Departamentos en Venta en Puebla</h4>
                            <ul>
                                <li><a>Departamentos en Venta en La Vista</a></li>
                                <li><a>Departamentos en Venta junto a Lomas de Angelópolis</a></li>
                            </ul>
                        </div>
                        <div className='col-md-2 col-12'>
                            <h4>Departamentos en Renta en Puebla</h4>
                            <ul>
                                <li><a>Departamentos en Renta en Tlaxclancingo </a></li>
                                <li><a>Departamentos en Renta junto a Lomas de Angelópolis</a></li>
                            </ul>
                        </div>
                        <div className='col-md-2 col-12'>
                            <h4>Oficinas en Renta en Puebla </h4>
                            <ul>
                                <li><a>Oficinas en Renta en Atlixcayotl</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Category