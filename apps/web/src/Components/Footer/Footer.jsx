import React from 'react'
import Image from 'next/image'
import { Logo, Tiktok, Ig, Fb, Goplek } from 'ui/constants'

export default function Footer(){
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
                            <ul className="nav justify-content-start">
                                <a className="nav-link" href="#">Casas</a>
                                <a className="nav-link" href="#">Departamentos</a>
                                <a className="nav-link" href="#">Terrenos</a>
                                <a className="nav-link" href="#">Local comercial</a>
                                <a className="nav-link" href="#">Oficinas</a>
                                <a className="nav-link" href="#">Nosotros</a>
                                <a className="nav-link" href="#">Contacto</a>
                            </ul>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 fcc-aviso d-flex'>
                        <div className='col-md-2 derechos'>
                            <span>Lomas home © 2022.</span><br/>
                            <span>Todos los derechos reservados.</span><br/>
                            <span>AVISO DE PRIVACIDAD</span>
                        </div>
                        <div className='col-md-8'>
                            <ul className="nav justify-content-start">
                                <a className="nav-link" href="#"><Image src={Tiktok} alt="Tiktok" width="15" height="18" /></a>
                                <a className="nav-link" href="#"><Image src={Ig} alt="Instagram" width="15" height="18" /></a>
                                <a className="nav-link" href="#"><Image src={Fb} alt="Facebook" width="15" height="18" /></a>
                            </ul>
                        </div>
                        <div className='col-md-2'>
                            <Image src={Goplek} alt="" width="54" height="15" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}