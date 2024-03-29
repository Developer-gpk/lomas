import React, { useState, useCallback } from "react"
import Image from 'next/image'
import ImageViewer from 'react-simple-image-viewer'
import imageUrlBuilder from '@sanity/image-url'
import { M2Totales, M2Const, Rec, BaniosComp, Banio, Cochera, ArrowSend, Alberca, Arco, Juegos, Firepit, Salon, GYM, Elevador} from 'ui/constants'
import Client from '../../libs/Client'
import Layout from '../../src/Layout/Layout'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import HubspotContactForm from "../../src/Components/Hubspot/HubspotContactForm"
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const builder = imageUrlBuilder(Client)

function Propiedad({propiedad}){
    const validation = Yup.object().shape({
        nombre: Yup.string().required(),
        email: Yup.string().email().required(),
        telefono: Yup.string().required(),
    })
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    let array = []

    function urlForce(soruce){
        const img = builder.image(soruce)
        array.push(img.url())
        return img
    }

    function separator(numb) {
        var str = numb.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
    }
    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);
    
    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };
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
    return(
        <Layout title={`${propiedad?.name} | Lomas Home`} description={propiedad?.name} keywords={`${propiedad?.name}, ${propiedad?.availability}, ${propiedad?.categoria?.category}, ${propiedad?.address}`}>
            {isViewerOpen && (
                <ImageViewer
                    src={array}
                    currentIndex={ currentImage }
                    disableScroll={ true }
                    closeOnClickOutside={ true }
                    onClose={ closeImageViewer }
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)",
                    }}
                />
            )}
            <section className="block" id="galeria">
                <div className="holder">
                    <div className="container-fluid">
                        <div className="wrap">
                            {propiedad?.imagesGallery?.map((img, index) =>(
                                index < 5 ? 
                                <div key={index}>
                                    <Image src={urlForce(img.asset).url()} alt="pin" width={637} height={420} onClick={ () => openImageViewer(index) } />
                                </div>
                                :
                                <div key={index} style={{display: "none"}}>
                                    <Image src={urlForce(img).url()} alt="pin" width={637} height={420} onClick={ () => openImageViewer(index) } />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="block" id="content">
                <div className="holder">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-md-8 ficha">
                                <div className="row">
                                    <div className="col-6 col-md-8 sku">
                                        { propiedad?.sku ? <h5>{propiedad?.sku}</h5> : null }
                                    </div>
                                    <div className="col-6 col-md-4 categoria">
                                        { propiedad?.sku ? <h5>{propiedad?.categoria?.category}</h5> : null }
                                        { propiedad?.availability ? <h5>{propiedad?.availability}</h5> : null }
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 titulo">
                                        { propiedad?.name ? <h1 className="">{propiedad?.name}</h1> : null }
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 direccion">
                                        { propiedad?.address ? <h5 className="align-middle"> {propiedad?.address}</h5> : null }
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 precio">
                                        { propiedad?.sale ? <h2>${separator(propiedad?.sale)}</h2> : null }
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 aminidades">
                                        <div className="nav">
                                            { propiedad?.size ? <p className="nav-link"><span><Image src={M2Totales} alt="pin" width="16" height="16" layout={"fixed"} /> {propiedad?.size}</span> m2 de terreno</p> : null }
                                            { propiedad?.construction ? <p className="nav-link"><span><Image src={M2Const} alt="pin" width="16" height="16" layout={"fixed"} /> {propiedad?.construction}</span> m2 de construcción</p> : null }
                                            { propiedad?.bedrooms ? <p className="nav-link"><span><Image src={Rec} alt="pin" width="16" height="16" layout={"fixed"} /> {propiedad?.bedrooms}</span> Recamaras</p> : null }
                                            { propiedad?.bathroom ? <p className="nav-link"><span><Image src={BaniosComp} alt="pin" width="16" height="16" layout={"fixed"} /> {propiedad?.bathroom}</span> Baños</p> : null }
                                            { propiedad?.bathroom2 ? <p className="nav-link"><span><Image src={Banio} alt="pin" width="16" height="16" layout={"fixed"} /> {propiedad?.bathroom2}</span> Baños</p> : null }
                                            { propiedad?.parking ? <p className="nav-link"><span><Image src={Cochera} alt="pin" width="16" height="16" layout={"fixed"} /> {propiedad?.parking}</span> Cochera</p> : null }
                                        </div>
                                    </div>
                                </div>
                                {propiedad?.details || propiedad?.details2 ? (
                                    <div className="row">
                                        <div className="col-12 detalles">
                                            <div>
                                                <h3>Detalles de la Propiedad</h3>
                                                { propiedad?.details ? <p>{propiedad?.details}</p> : null }
                                                { propiedad?.details2 ? <p>{propiedad?.details2}</p> : null }
                                            </div>
                                        </div>
                                    </div>
                                ) : (<></>)}
                                {propiedad?.pool || propiedad?.arc || propiedad?.games || propiedad?.grills || propiedad?.events || propiedad?.gym || propiedad?.elevator ? (
                                    <div className="row">
                                        <div className="col-12 aminidadesP2">
                                            <div>
                                                <h3>Amenidades</h3>
                                                <div className="nav">
                                                    { propiedad?.pool ? <p className="nav-link text-center"><span><Image src={Alberca} alt="pin" width="40" height="40" layout={"fixed"} /></span><br/>Alberca</p> : null }
                                                    { propiedad?.arc ? <p className="nav-link text-center"><span><Image src={Arco} alt="pin" width="40" height="40" layout={"fixed"} /></span><br/>Arco de acceso</p> : null }
                                                    { propiedad?.games ? <p className="nav-link text-center"><span><Image src={Juegos} alt="pin" width="40" height="40" layout={"fixed"} /></span><br/>Juegos infantiles</p> : null }
                                                    { propiedad?.grills ? <p className="nav-link text-center"><span><Image src={Firepit} alt="pin" width="40" height="40" layout={"fixed"} /></span><br/>Firepit</p> : null }
                                                    { propiedad?.events ? <p className="nav-link text-center"><span><Image src={Salon} alt="pin" width="40" height="40" layout={"fixed"} /></span><br/>Salón de eventos</p> : null }
                                                    { propiedad?.gym ? <p className="nav-link text-center"><span><Image src={GYM} alt="pin" width="40" height="40" layout={"fixed"} /></span><br/>Gimnasio</p> : null }
                                                    { propiedad?.elevator ? <p className="nav-link text-center"><span><Image src={Elevador} alt="pin" width="40" height="40" layout={"fixed"} /></span><br/>Elevador</p> : null }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (<></>)}
                                {propiedad?.url ? (
                                    <div className="row">
                                        <div className="col-12 video">
                                            <h3>Video</h3>
                                            <ReactPlayer url={propiedad?.url} />
                                        </div>
                                    </div>
                                ) : (<></>)}
                                <Formik
                                    initialValues={{
                                        nombre: "",
                                        email: "",
                                        telefono: ""
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
                                            <div className="form">
                                                <h3>Tour virtual</h3>
                                                <span>¿Quieres ver el recorrido virtual?</span><br />
                                                <span>Déjanos tus datos y te lo haremos llegar </span>
                                                <div className="formulario">
                                                    <Field className={`${errors.nombre && touched.nombre ? ("isError") : null}`} name="nombre" type="text" placeholder="Nombre*" required/>
                                                    <Field className={`${errors.email && touched.email ? ("isError") : null}`} name="email" type="email" placeholder="e-mail*" required/>
                                                    <Field className={`${errors.telefono && touched.telefono ? ("isError") : null}`} name="telefono" type="text" placeholder="Teléfono*" required/>
                                                </div>
                                                <div className="enviar">
                                                    <button type="submit" onClick={gaFooter('Contacto', 'Enviar Formulario', '')}>
                                                        Enviar <Image src={ArrowSend} alt="pin" width="13" height="12" layout={"fixed"} />
                                                    </button>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                            <div className="col-12 col-md-4 hubsport-form">
                                <HubspotContactForm region="na1" portalId="22106410" formId="5bdff5f8-9672-499f-8f65-f42bac941d02" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
  
export async function getServerSideProps(context) {
    console.log(context)
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.params
    const propiedad = await Client.fetch(
      `
        *[_type == "propiedades" && slug.current == $slug]{
          ...,
          categoria->
        }[0]
      `, { slug })
    return {
      props: {
        propiedad
      }
    }
}
  

export default Propiedad