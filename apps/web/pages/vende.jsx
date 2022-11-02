import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Logo, LomasMobile, CoverLanding, Dropdown, ArrowSend, SecondCoverLanding, ImagenVende1, phone, LomasHomeIcon, Camera, ImagenVende2, ImagenVende3, ImagenVende4, ImagenVende5, Asesor, Asesor2, Asesor3 } from 'ui/constants'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import Footer from '../src/Components/Footer/Footer'
import FormSteps from '../src/Components/FormSteps/FormSteps'
import LayoutLandig from '../src/Layout/LayoutLanding'
import { ScrollParallax } from 'react-just-parallax'

export default function Vende(){
    const [isActive, setIsActive] = useState(false)
    const [isClick, setIsClick] = useState(false)
    const chageBackground = () =>{
        if(window.scrollY >= 80){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    useEffect(() =>{
        if (window.innerWidth > 767) {
    
            let section = document.querySelector('#llegaste'),
                title = document.querySelector('.block.llegaste h2');
    
            if (section) {
                let wrapper = section.querySelector('.wrapper-sections'),
                    variable = window.innerWidth - window.innerHeight,
                    width = wrapper.offsetWidth;
                section.style.height = (width - variable) + 'px';
                
                const handleScroll = event => {
                    let sectionRect = section.getBoundingClientRect();
    
                    if (sectionRect.top < 0) {
                        title.style.position = 'fixed';
                        wrapper.style.position = 'fixed';
                        wrapper.style.top = 0;
                        title.style.top = '152px';
                        wrapper.style.bottom = 'unset';
                        wrapper.style.transform = 'translateX(' + sectionRect.top + 'px)';
                    }
                    
                    if (sectionRect.top > 0) {
                        title.style.position = 'absolute';
                        wrapper.style.position = 'absolute';
                        wrapper.style.top = 0;
                        title.style.top = '152px';
                        wrapper.style.bottom = 'unset';
                        wrapper.style.transform = 'translateX(0)';
                    }
                    
                    if ((sectionRect.bottom - window.innerHeight) < 0) {
                        title.style.position = 'absolute';
                        wrapper.style.position = 'absolute';
                        wrapper.style.top = 'unset';
                        wrapper.style.bottom = 0;
                        title.style.top = '152px';
                        wrapper.style.transform = 'translateX(-' + (width - window.innerWidth) + 'px)';
                    }
    
                };
                
                window.addEventListener('scroll', handleScroll);
            }
        }
        chageBackground()
        window.addEventListener('scroll', chageBackground)
    }, [])
    return(
        <LayoutLandig>         
            <section className='block' id='landing'>
                <div className='holder'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 col-md-5 title'>
                                <h1>Es hora de vender tu propiedad de manera eficiente</h1>
                                <h2>Olvídate del estrés y la espera innecesaria.</h2>
                                <Link href="/vende#form-landing">
                                    <a>Quiero vender mi propiedad <Image src={ArrowSend} alt="pin" width="13" height="12" /></a>
                                </Link>
                            </div>
                            <div className='col-12 col-md-7 image'>
                                <ParallaxBanner 
                                    className=''
                                    style={{
                                        aspectRatio: '2/1',
                                        height: '580px',
                                        width: "818px"
                                    }}
                                    layers={[
                                        {
                                            image: SecondCoverLanding.src,
                                            speed: -10
                                        }
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='block llegaste' id='llegaste'>
                <div className='holder'>
                    <div className='container-fluid'>
                        <div className='header'>
                            <h2><span>¿Por qué vender tu propiedad</span> con Lomas Home Inmobiliaria?</h2>
                        </div>
                        <div className='wrapper-sections'>
                            <div className='item item-one'>
                                <div className='content'>
                                    <div className='flex-content'>
                                        <div className='image-wrapper'>
                                            <Image src={ImagenVende1} alt="Asesor 1" />
                                        </div>
                                        <div className='text-wrapper'>
                                            <p>Queremos hacer de este proceso <strong>una experiencia extraordinaria.</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='item item-two'>
                                <div className='content'>
                                    <div className='flex-content'>
                                        <div className='image-wrapper'>
                                            <Image src={ImagenVende2} alt="Asesor 2" />
                                        </div>
                                        <div className='text-wrapper'>
                                            <p><strong>Absorbemos todos los procesos operativos</strong> y entregamos un reporte con todos los movimientos relacionados con tus propiedades. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='item item-three'>
                                <div className='content'>
                                    <div className='flex-content'>
                                        <div className='image-wrapper'>
                                            <Image src={ImagenVende3} alt="Asesor 2" />
                                        </div>
                                        <div className='text-wrapper'>
                                            <p>Nos ocuparemos de <strong>recolectar el material visual de tus bienes,</strong> como fotografías profesionales y creación de recorridos virtuales, para ofrecer una excelente visibilidad.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='item item-four'>
                                <div className='content'>
                                    <div className='flex-content'>
                                        <div className='text-wrapper'>
                                            <p><strong>Contamos con asesoría integral</strong> para atender cualquier tema legal y de operación. </p>
                                        </div>
                                        <div className='image-wrapper'>
                                            <Image src={ImagenVende4} alt="Asesor 4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='item item-five'>
                                <div className='content'>
                                    <div className='flex-content'>
                                        <div className='image-wrapper'>
                                            <Image src={ImagenVende5} alt="Asesor 5" />
                                        </div>
                                        <div className='text-wrapper'>
                                            <p>Nuestros socios vendedores son esenciales, por ello les <strong>asignamos un agente inmobiliario  altamente capacitado</strong> para crear un canal de comunicación eficiente.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='block' id='que-hacemos'>
                <div className='holder'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 col-md-6 listas'>
                                <h2>¿Qué hacemos para vender tu propiedad?</h2>
                                <div className='row'>
                                    <div className='col-12 col-md-6'>
                                        <ul className="">
                                            <li className=""><div className='camara'></div><h5>Levantamiento de fotografías profesionales.</h5></li>
                                            <li className=""><div className='trecientos'><h5>Mostramos los recorridos virtuales de tu propiedad.</h5></div></li>
                                            <li className=""><div className='planos'></div><h5>Proporcionamos los planos arquitectónicos.</h5></li>
                                            <li className=""><div className='plataforma'></div><h5>Damos visibilidad de la propiedad en distintas plataformas digitales.</h5></li>
                                            <li className=""><div className='capacitado'></div><h5>Asignamos a un consultor altamente capacitado.</h5></li>
                                            <li className=""><div className='material'></div><h5>Colocamos material promocional en zonas digitales estratégicas.</h5></li>
                                        </ul>
                                    </div>
                                    <div className='col-12 col-md-6'>
                                        <ul className="">
                                            <li className=""><div className='valoracion'></div><h5>Valoración gratuita.</h5></li>
                                            <li className=""><div className='ejecutivo'></div><h5>Asignamos a un ejecutivo de cuenta.</h5></li>
                                            <li className=""><div className='contrato'></div><h5>Elaboramos el contrato privado de compra-venta.</h5></li>
                                            <li className=""><div className='verificamos'></div><h5>Verificamos la legalidad de la propiedad.</h5></li>
                                            <li className=""><div className='acompañamiento'></div><h5>Brindamos acompañamiento en citas y escritura.</h5></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 image'>
                                <div className='logo'>
                                    <ScrollParallax>
                                        <Image src={LomasHomeIcon} width="115" height="110" className='' alt="Asesor 1" />
                                    </ScrollParallax>
                                </div>
                                <Image src={phone} width="417" height="534" alt="Asesor 1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='block' id="lugar">
                <div className='holder'>
                    <div className='container-fluid'>
                        <div className='row content'>
                            <div className='col-12 col-md-6'>
                                <h2><span>¡Llegaste al lugar indicado!,</span> empieza ahora a ofertar tus bienes con nosotros.</h2>
                                <Link href="/vende#form-landing">
                                    <a>Quiero vender mi propiedad <Image src={ArrowSend} alt="pin" width="13" height="12" /></a>
                                </Link>
                            </div>
                            <div className='col-12 col-md-6 d-none d-sm-none d-md-block img'>
                                <Image src={Asesor} alt="Asesor 1" width={493} height={585} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='block' id='vender'>
                <div className='holder'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <h2><span>¿Qué necesitas para vender</span> tu propiedad con nosotros?</h2>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-5 images'>
                                <Image src={Asesor2} alt="Asesor 2" width={527} height={590} />
                            </div>
                            <div className='col-12 col-md-7'>
                                <div className='row requisitos'>
                                    <h3>Requisitos</h3>
                                    <div className='row requi'>
                                        <div className='col-12 col-md-6'>
                                            <ul className="">
                                                <li className=""><span>Información y copia de la escritura (con sello del Registro Público de la Propiedad)</span></li>
                                                <li className=""><span>Copia de último pago de predial y agua.</span></li>
                                                <li className=""><span>Comprobante de domicilio (no mayor a 3 meses).</span></li>
                                                <li className=""><span>Información de las dimensiones y detalles de la propiedad (para valuación).</span></li>
                                            </ul>
                                        </div>
                                        <div className='col-12 col-md-6'>
                                            <ul className="">
                                                <li className=""><span>Fotografías del inmueble.</span></li>
                                                <li className=""><span>Constancia de situación fiscal.</span></li>
                                                <li className=""><span>Certificado de libertad de gravamen.</span></li>
                                                <li className=""><span>Identificación del propietario.</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <section className='block' id='form-landing'>
                    <div className='holder'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-12 col-md-5 images'>
                                    <div className='row'>
                                        <h2><span>¡Felicidades!</span> estás a punto de comenzar el proceso de venta de tu propiedad</h2>
                                    </div>
                                    <div className='row text-center justify-content-center asesor'>
                                        <Image src={Asesor3} alt="Asesor 3" />
                                    </div>
                                </div>
                                <div className='col-12 col-md-7 form'>
                                    <FormSteps />
                                </div>
                            </div>
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
        </LayoutLandig>
    )
}