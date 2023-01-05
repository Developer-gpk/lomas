import React from 'react'
import Image from 'next/image'
import { Logo, Tiktok, Ig, Fb, Goplek } from 'ui/constants'
import Link from 'next/link'

export default function Footer(){
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
        <footer className='block' id='footer'>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='col-12 col-md-6'>
                        <Image src={Logo} alt="Logo Lomas Home" width="97" height="60" />
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-4 mt-2 fcc-text'>
                            Lomas Home Inmobiliaria<span> te ofrece la posibilidad de vender o comprar la propiedad que siempre quisiste tener,</span> tenemos en nuestro catálogo los bienes más exclusivos de Puebla.
                        </div>
                        <div className='col-12 col-md-6 fcc-link'>
                            <ul className="nav justify-content-end">
                                <div className='compra-dep'>
                                    <a className="nav-link">Compra</a>
                                    <ul>
                                        <li>
                                            <Link href="/casa">
                                                <a>Casas</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/departamento">
                                                <a>Departamentos</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/terreno">
                                                <a>Terrenos</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/local">
                                                <a>Locales comerciales</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/oficina">
                                                <a>Oficinas</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <Link href="/vende">
                                    <a className="nav-link">Vende tu propiedad</a>
                                </Link>
                                <Link href="/creditos">
                                    <a className="nav-link">Créditos</a>
                                </Link>
                                <Link href="/conocenos">
                                    <a className="nav-link">Conócenos</a>
                                </Link>
                                <Link href="/#contacto">
                                    <a className="nav-link">Contacto</a>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 fcc-aviso d-flex'>
                        <div className='col-md-3 derechos'>
                            <span>Lomas home © 2022.</span>
                            <span>Todos los derechos reservados.</span><br/>
                            <Link href="/privacidad">
                                <a target="_bank" style={{ textDecoration: "none", color: "#FFFFFF"}}><span>AVISO DE PRIVACIDAD</span></a>
                            </Link>
                        </div>
                        <div className='col-md-7 col-4 centro'>
                            <ul className="nav justify-content-start">
                                <a className="nav-link" href="https://www.tiktok.com/@lomashome?_t=8WgwwmFFGqr&_r=1" onClick={gaFooter('Contacto', 'Abrir TikTok', '')} target='_blank' rel="noopener noreferrer"><Image src={Tiktok} alt="Tiktok" width="15" height="18" /></a>
                                <a className="nav-link" href="https://instagram.com/lomashome?igshid=YmMyMTA2M2Y=" onClick={gaFooter('Contacto', 'Abrir Instagram', '')} target='_blank' rel="noopener noreferrer"><Image src={Ig} alt="Instagram" width="15" height="18" /></a>
                                <a className="nav-link" href="https://www.facebook.com/profile.php?id=100083650590910" onClick={gaFooter('Contacto', 'Abrir Facebook', '')} target='_blank' rel="noopener noreferrer"><Image src={Fb} alt="Facebook" width="15" height="18" /></a>
                            </ul>
                        </div>
                        <div className='col-md-2 text-end'>
                            <Image src={Goplek} alt="" width="54" height="15" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}