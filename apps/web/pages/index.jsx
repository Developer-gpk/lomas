import React from 'react'
import Image from 'next/image'
import Layout from "../src/Layout/Layout"
import { Formik, Form, Field } from 'formik'
import { ParallaxBanner } from 'react-scroll-parallax'
import { Casa, Depart, Terre, Local, Oficina, LomasHomeIcon, FamilyContact, ArrowSend, Call, Wa, Mail, Pin, Enviando   } from "ui/constants"
import PropiedadList from '../src/Components/List/propiedad'
import Client from '../libs/Client'
import { ScrollParallax } from 'react-just-parallax'
import * as Yup from 'yup'
import MainSlider from '../src/Components/mainSlider/mainSlider'
import Conocenos from '../src/Components/Conocenos/conocenos'
import HubspotContactForm from '../src/Components/Hubspot/HubspotContactForm'


function Web({home}) {
  const validation = Yup.object().shape({
    nombre: Yup.string().required(),
    email: Yup.string().email().required(),
    telefono: Yup.string().required(),
    contacto: Yup.string().required()
  })
  const gaFooter = function(category, action, label) {
    if ("function" === typeof gtag
        && "string" === typeof category
        && "string" === typeof action) {
        var object = {
            "event_action": action,
            "event_label" : label || ''
        };

        // Send to Google Analytics.
        gtag('event', category, object);

        // Print in console.
        if ("console" in window) {
            console.log(
                'ga: [category: %s, action: %s, label: %s]',
                category,
                object['event_action'],
                object['event_label']
            );
        }
    }
  }
  return (
    <Layout title="Lomas Home" description={home.descripcion} keywords={home.keywords}>
      <section className="block" id="portada">
        <MainSlider imagenes={home?.imagenes_desk} />
      </section>
      <section className="block" id="propiedades" data-aos="fade-up">
        <div className="holder">
          <div className="container-fluid">
            <h2 className="text-center my-5">Propiedades</h2>
            <div className='categorias'>
              <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#casas-tab-panel" type="button" role="tab" aria-controls="casas-tab-panel" aria-selected="true"><Image src={Casa} alt="Logo Lomas Home" width="30" height="30" />Casas</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#departamentos-tab-panel" type="button" role="tab" aria-controls="departamentos-tab-panel" aria-selected="false"><Image src={Depart} alt="Logo Lomas Home" width="30" height="30" />Departamentos</button>
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
        <Conocenos text1={home.texto1} text2={home.texto2} />   
      </section>
      <section className='block' id="logo">
        <div className='holder'>
          <div className='container-fluid text-end'>
            <ScrollParallax>
              <Image src={LomasHomeIcon} alt="pin" width="196" height="186" layout={"fixed"} />
            </ScrollParallax>
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
              image: FamilyContact.src,
              speed: -10,
            },
            {
              children: (
                <div className='holder' data-aos="fade-up">
                  <div className='my-5'>
                    <div className='row'>
                      <div className='container-fluid'>
                        <h3 className='text-center'>Contacto</h3>
                        <p className='text-center'><span>Envíanos un mensaje o llámanos,</span><br/>con gusto te atenderemos.</p>
                      </div>
                    </div>
                      {/*}
                      <Formik
                        initialValues={{
                          nombre: '',
                          email: '',
                          telefono: '',
                          contacto: '',
                          mensaje: ''
                        }}
                        validationSchema={validation}
                        onSubmit={async (values, { setSubmitting }) =>{
                          try {
                            const endpoint = `https://www.goplek.com/mailer/send-mail-v1.php`;
                            const res = await fetch(endpoint, {
                              method: "POST",
                              headers: { "Content-Type": "application/x-www-form-urlencoded" },
                              body: `data=${JSON.stringify({
                                host: "lomashome.com.mx",
                                data: values,
                              })}`,
                            });
                            const data = await res.text();
                            console.log(data)
                          } catch (error) {
                            console.log(error)
                          }
                        }}
                      >
                        {({isSubmitting, errors, touched}) =>(  
                          <Form>
                            {!isSubmitting ? (
                              <div className='row'>
                                <div className='col-12 col-md-6'>
                                  <div className='mb-4 input-contact'>
                                    <Field name="nombre" type="text" className={`form-control ${errors.nombre && touched.nombre ? ("isError") : null}`} aria-describedby="emailHelp" placeholder='Nombre*' />
                                  </div>
                                  <div className='mb-4 input-contact'>
                                    <Field name='email' type="email" className={`form-control ${errors.email && touched.email ? ("isError") : null}`} aria-describedby="emailHelp" placeholder='Correo*' />
                                  </div>
                                  <div className='mb-4 input-contact'>
                                    <Field name='telefono' type="text" className={`form-control ${errors.telefono && touched.telefono ? ("isError") : null}`} aria-describedby="emailHelp" placeholder='Telefono de 10 dígitos*' />
                                  </div>
                                  <div className='mb-4'>
                                    <h6>¿Cómo prefieres que te contactemos?*</h6>
                                    <div className='row'>
                                      <div className='col-4 col-md-4 options-contact'>
                                        <Field className={` ${errors.contacto && touched.contacto ? ("isError") : null}`} type="radio" name="contacto" id="whatsapp" value="WhatsApp" />
                                        <label className="form-check-label" htmlFor="whatsapp">
                                          Whatsapp
                                        </label>
                                      </div>
                                      <div className='col-4 col-md-4 options-contact'>
                                        <Field className={` ${errors.contacto && touched.contacto ? ("isError") : null}`} type="radio" name="contacto" id="correo" value="Correo" />
                                        <label className="form-check-label" htmlFor="correo">
                                          Correo
                                        </label>
                                      </div>
                                      <div className='col-4 col-md-4 options-contact'>
                                        <Field className={` ${errors.contacto && touched.contacto ? ("isError") : null}`} type="radio" name="contacto" id="llamada" value="Llamada" />
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
                                    <button type="submit" className="btn" onClick={gaFooter('Contacto', 'Enviar Formulario', '')}>Enviar <Image src={ArrowSend} alt="pin" width="13" height="12" layout={"fixed"} /></button>
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
                      {*/}
                      <HubspotContactForm region="na1" portalId="22106410" formId="2c6aff2e-a4d3-4043-a58e-70d3f94c8d72" />
                  </div>
                  <div className='row mx-auto contactos'>
                    <div className='col-md-2'>
                      <a href='tel:+52(222)6886134'>
                        <Image src={Call} alt="pin" width="25" height="25" layout={"fixed"} /> (222) 688 6134
                      </a>
                    </div>
                    <div className='col-md-2'>
                      <a href='https://wa.me/+522215572917'>
                        <Image src={Wa} alt="pin" width="25" height="25" layout={"fixed"} /> 221 557 2917
                      </a>
                    </div>
                    <div className='col-md-8'>
                      <a href='mailto:contacto@lomashome.com.mx'>
                        <Image src={Mail} alt="pin" width="25" height="25" layout={"fixed"} /> contacto@lomashome.com.mx
                      </a>
                    </div>
                    <div className='col-md-10 mt-4 d-flex'>
                      <div className='mt-2'><Image src={Pin} alt="pin" width="25" height="25" layout={"fixed"} /></div> Niños Héroes 4927 · Ofic. 2 Reserva Territorial Atlixcayotl <br/>  C.P. 72190 Col. San Miguel La Rosa, Puebla, Pue.
                    </div>
                  </div>
              </div>
              )
            }
          ]}
        />
      </section>
      <section className='block' id="lugares">
        <div className='holder' data-aos="fade-up">
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

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const home = await Client.fetch(
    `
      *[_type == "home" ][0]{
        ...
      }
    `)
  return {
    props: {
      home
    }
  }
}

export default Web