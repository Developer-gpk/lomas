import React from 'react'
import Image from 'next/image'
import Layout from "../src/Layout/Layout"
import { Formik, Form, Field } from 'formik'
import { ParallaxBanner } from 'react-scroll-parallax'
import { Cover1, 
        Cover2, 
        Cover3, 
        CoverMobile1, 
        CoverMobile2, 
        CoverMobile3, 
        Casa, 
        Depart, 
        Terre, 
        Local, 
        Oficina, 
        BannerConocenos, 
        Arrow1, 
        LomasHomeIcon, 
        FamilyContact, 
        ArrowSend,
        Call,
        Wa,
        Mail,
        Pin,
        Enviando   } from "ui/constants"
import SearchDesk from "../src/Components/Search/SearchDesk"
import SearchMobile from "../src/Components/Search/SearchMobile"
import PropiedadList from '../src/Components/List/propiedad'

export default function Web() {
  return (
    <Layout>
      <section className="block" id="portada">
        <div className="portada-carousel">
          <div id="carouselDesktop" className="carousel slide carousel-fade d-none d-sm-none d-md-block" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <ParallaxBanner
                  className='portada-parallax-desk'
                  style={{ 
                    aspectRatio: '2 / 1',
                  }}
                  layers={[
                    {
                      image:
                        Cover1.src,
                      speed: -10,
                    },
                  ]}
                />
              </div>
              <div className="carousel-item">
                <ParallaxBanner
                  className='portada-parallax-desk'
                  style={{ 
                    aspectRatio: '2 / 1',
                  }}
                  layers={[
                    {
                      image:
                        Cover2.src,
                      speed: -10,
                    },
                  ]}
                />
              </div>
              <div className="carousel-item">
                <ParallaxBanner
                  className='portada-parallax-desk'
                  style={{ 
                    aspectRatio: '2 / 1',
                  }}
                  layers={[
                    {
                      image:
                        Cover3.src,
                      speed: -10,
                    },
                  ]}
                />
              </div>
              <div className="carousel-caption">
                <h3>¿Qué tipo de propiedad estás buscando?</h3>
                <SearchDesk />
              </div>
            </div>
          </div>
          <div id="carouselMobile" className="carousel slide carousel-fade d-block d-sm-block d-md-none" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <ParallaxBanner
                  className='portada-parallax-mobile'
                  style={{ 
                    aspectRatio: '2 / 1',
                  }}
                  layers={[
                    {
                      image:
                        CoverMobile1.src,
                      speed: -10,
                    },
                  ]}
                />
              </div>
              <div className="carousel-item">
                <ParallaxBanner
                  className='portada-parallax-mobile'
                  style={{ 
                    aspectRatio: '2 / 1',
                  }}
                  layers={[
                    {
                      image:
                        CoverMobile2.src,
                      speed: -10,
                    },
                  ]}
                />
              </div>
              <div className="carousel-item">
                <ParallaxBanner
                  className='portada-parallax-mobile'
                  style={{ 
                    aspectRatio: '2 / 1',
                  }}
                  layers={[
                    {
                      image:
                       CoverMobile3.src,
                      speed: -10,
                    },
                  ]}
                />
              </div>
              <div className="carousel-caption">
                <h3>¿Qué tipo de propiedad estás buscando?</h3>
                <SearchMobile />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block" id="propiedades">
        <div className="holder">
          <div className="container-fluid">
            <h2 className="text-center my-5">Propiedades</h2>
            <div className='categorias'>
              <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#casas-tab-panel" type="button" role="tab" aria-controls="casas-tab-panel" aria-selected="true"><Image src={Casa} alt="Logo Lomas Home" width="30" height="30" /><span>Casas</span></button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#departamentos-tab-panel" type="button" role="tab" aria-controls="departamentos-tab-panel" aria-selected="false"><Image src={Depart} alt="Logo Lomas Home" width="30" height="30" /><span>Departamentos</span></button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#terrenos-tab-panel" type="button" role="tab" aria-controls="terrenos-tab-panel" aria-selected="false"><Image src={Terre} alt="Logo Lomas Home" width="30" height="30" />Terrenos</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#locales-tab-panel" type="button" role="tab" aria-controls="locales-tab-panel" aria-selected="false"><Image src={Local} alt="Logo Lomas Home" width="30" height="30" />Locales</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#oficinas-tab-panel" type="button" role="tab" aria-controls="oficinas-tab-panel" aria-selected="false"><Image src={Oficina} alt="Logo Lomas Home" width="30" height="30" />Oficinas</button>
                </li>
              </ul>
            </div>
            <div className="tab-content my-5" id="myTabContent">
              <div className="tab-pane fade show active" id="casas-tab-panel" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                <ul className='propiedades'>
                  <PropiedadList propiedad={'Casa'} />
                </ul>
              </div>
              <div className="tab-pane fade" id="departamentos-tab-panel" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                <ul className='propiedades'>
                  <PropiedadList propiedad={'Departamento'} />
                </ul>
              </div>
              <div className="tab-pane fade" id="terrenos-tab-panel" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                <ul className='propiedades'>
                  <PropiedadList propiedad={'Terreno'} />
                </ul>
              </div>
              <div className="tab-pane fade" id="locales-tab-panel" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                <ul className='propiedades'>
                  <PropiedadList propiedad={'Local'} />
                </ul>
              </div>
              <div className="tab-pane fade" id="oficinas-tab-panel" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                <ul className='propiedades'>
                  <PropiedadList propiedad={'Oficina'} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block" id="conocenos">
        <div className='holder'>
          <ParallaxBanner
            className='conocenos-parallax-desk'
            style={{ 
              aspectRatio: '2 / 1',
              zIndex: "2"
            }}
            layers={[
              {
                image:
                  BannerConocenos.src,
                  speed: -10,
              },
              {
                children: (
                  <section className='container-fluid'>
                    <section className='row content'>
                      <p>
                        Somos una empresa creada para ofrecer soluciones inmobiliarias a través de un amplio catálogo de propiedades en las zonas más exclusivas en Puebla. 
                        <br/><br/>Buscamos hacer de este proceso una experiencia extraordinaria.
                        <br/><br/>
                        <span>El valor intangible que necesitas está aquí</span>
                        <br/><br/>
                        <a>Conoce más <Image src={Arrow1} alt="pin" width="13" height="12" layout={"fixed"} /></a>
                      </p>
                    </section>
                  </section>
                )
              }
            ]}
          />
        </div>         
      </section>
      <section className='block' id="logo">
        <div className='holder'>
          <div className='container-fluid text-end'>
            <Image src={LomasHomeIcon} alt="pin" width="196" height="186" layout={"fixed"} />
          </div>
        </div>
      </section>
      <section className='block' id="contacto">
        <ParallaxBanner
          className='parallax-contacto-desk'
          style={{ 
            aspectRatio: '1 / 2',
            height: '1116px',
            marginTop: '-200px'
          }}
          layers={[
            {
              image:
                FamilyContact.src,
              speed: -10,
            },
            {
              children: (
                <div className='holder'>
                  <div className='my-5'>
                    <div className='row'>
                      <div className='container-fluid'>
                        <h3 className='text-center'>Contacto</h3>
                        <p className='text-center'><span>Envíanos un mensaje o llámanos,</span><br/>con gusto te atenderemos.</p>
                      </div>
                    </div>
                      <Formik
                        initialValues={{
                          nombre: '',
                          email: '',
                          telefono: '',
                          contacto: '',
                          mensaje: ''
                        }}
                        onSubmit={async (values, { setSubmitting }) =>{
                          console.log(values)
                          await setTimeout(() =>{
                            setSubmitting(true)
                          }, 5000)
                          setSubmitting(false)
                        }}
                      >
                        {({isSubmitting}) =>(  
                          <Form>
                            {!isSubmitting ? (
                              <div className='row'>
                                <div className='col-12 col-md-6'>
                                  <div className='mb-4 input-contact'>
                                    <Field name="nombre" type="text" className="form-control" aria-describedby="emailHelp" placeholder='Nombre*' />
                                  </div>
                                  <div className='mb-4 input-contact'>
                                    <Field name='email' type="email" className="form-control" aria-describedby="emailHelp" placeholder='Correo*' />
                                  </div>
                                  <div className='mb-4 input-contact'>
                                    <Field name='telefono' type="text" className="form-control" aria-describedby="emailHelp" placeholder='Telefono de 10 dígitos*' />
                                  </div>
                                  <div className='mb-4'>
                                    <h6>¿Cómo prefieres que te contactemos?*</h6>
                                    <div className='row'>
                                      <div className='col-4 col-md-4 options-contact'>
                                        <Field className="form-check-input" type="radio" name="contacto" id="whatsapp" value="WhatsApp" />
                                        <label className="form-check-label" htmlFor="whatsapp">
                                          Whatsapp
                                        </label>
                                      </div>
                                      <div className='col-4 col-md-4 options-contact'>
                                        <Field className="form-check-input" type="radio" name="contacto" id="correo" value="Correo" />
                                        <label className="form-check-label" htmlFor="correo">
                                          Correo
                                        </label>
                                      </div>
                                      <div className='col-4 col-md-4 options-contact'>
                                        <Field className="form-check-input" type="radio" name="contacto" id="llamada" value="Llamada" />
                                        <label className="form-check-label" htmlFor="llamada">
                                          Llamada
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                  <div className='mb-4'>
                                    <Field as="textarea" name='mensaje' className="form-control" rows="7" placeholder='Mensaje'></Field>
                                  </div>
                                  <div className='mb-4 submit-contact'>
                                    <button type="submit" className="btn">Enviar <Image src={ArrowSend} alt="pin" width="13" height="12" layout={"fixed"} /></button>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className='row text-center finalizado'>
                                <Image src={Enviando} alt="pin" width="50" height="50" style={{ margin: '0 auto'}} />
                                <h3>Enviando mensaje...</h3>
                              </div>
                            )}
                          </Form>
                        )}
                      </Formik>
                  </div>
                  <div className='row mx-auto'>
                    <div className='col-md-2'>
                      <Image src={Call} alt="pin" width="15" height="15" layout={"fixed"} /> (222) 226 7440
                    </div>
                    <div className='col-md-2'>
                      <Image src={Wa} alt="pin" width="15" height="15" layout={"fixed"} /> 2213 634 540
                    </div>
                    <div className='col-md-8'>
                      <Image src={Mail} alt="pin" width="15" height="15" layout={"fixed"} /> contacto@lomashome.com.mx
                    </div>
                    <div className='col-md-10 mt-4'>
                      <Image src={Pin} alt="pin" width="15" height="15" layout={"fixed"} />Niños Héroes 4927 · Ofic. 2 Reserva Territorial Atlixcayotl <br/>  C.P. 72190 Col. San Miguel La Rosa, Puebla, Pue.
                    </div>
                  </div>
              </div>
              )
            }
          ]}
        />
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
  );
}
