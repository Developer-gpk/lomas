import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Logo, CoverLanding, ArrowSend, SecondCoverLanding, ImagenVende1, phone, LomasHomeIcon, Camera } from 'ui/constants'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'


export default function Vende(){
    
    return(
        <ParallaxProvider>
            <section className='navi'>
                <div className='holder'>
                    <nav className='navbar navbar-expand-lg'>
                        <div className='container-fluid'>
                            <Link href="/">
                                <a className="navbar-brand" href="#">
                                    <Image src={Logo} alt="Logo Lomas Home" width="114" height="70" />
                                </a>
                            </Link>
                        </div>
                    </nav>
                </div>
            </section>
            <div className='wrapper'>
                <section className='block' id='landing'>
                    <div className='holder'>
                        <div className='row'>
                            <div className='col-12 col-md-6 title'>
                                <div className='container-fluid'>
                                    <h1>Es hora de vender tu propiedad de manera eficiente</h1>
                                    <span>Olvídate del estrés y la espera innecesaria.</span><br/>
                                    <a>Quiero vender mi propiedad <Image src={ArrowSend} alt="pin" width="13" height="12" /></a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 image'>
                                <ParallaxBanner 
                                    className=''
                                    style={{
                                        aspectRatio: '2/1',
                                        height: '580px'
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
                </section>
                <section className='block' id='title-statick'>
                    <div className='holder'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <h2><span>¿Por qué vender tu propiedad</span> con Lomas Home Inmobiliaria?</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='block' id='que-hacemos'>
                    <div className='holder'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <h2>¿Qué hacemos para vender tu propiedad?</h2>
                                    <div className='row'>
                                        <div className='col-12 col-md-6'>
                                            <ul className="">
                                                <li className="">
                                                    <Image src={Camera} alt="Camara" width="50" height="50" layout={"fixed"} /> 
                                                    <div>
                                                        Levantamiento de fotografías profesionales.
                                                    </div>
                                                    </li>
                                                <li className="">Mostramos los recorridos virtuales de tu propiedad.</li>
                                                <li className="">Proporcionamos los planos arquitectónicos.</li>
                                                <li className="">Damos visibilidad de la propiedad en distintas plataformas digitales.</li>
                                                <li className="">Asignamos a un consultor altamente capacitado.</li>
                                                <li className="">Colocamos material promocional en zonas digitales estratégicas.</li>
                                            </ul>
                                        </div>
                                        <div className='col-12 col-md-6'>
                                            <ul className="">
                                                <li className="">Valoración gratuita.</li>
                                                <li className="">Asignamos a un ejecutivo de cuenta.</li>
                                                <li className="">Elaboramos el contrato privado de compra-venta.</li>
                                                <li className="">Verificamos la legalidad de la propiedad.</li>
                                                <li className="">Brindamos acompañamiento en citas y escritura.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-6 image'>
                                    <div className='row'>
                                        <Image src={LomasHomeIcon} width="115" height="110" className='' />
                                    </div>
                                    <Image src={phone} width="417" height="534" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='block llegaste' id='llegaste'>
                    <div className='holder'>
                        <div className='container-fluid'>
                            <div className='wrapper-sections'>
                                <div className='item item-one'>

                                </div>
                                <div className='item item-two'>

                                </div>
                                <div className='item item-three'>

                                </div>
                                <div className='item item-four'>

                                </div>
                                <div className='item item-five'>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </ParallaxProvider>
    )
}