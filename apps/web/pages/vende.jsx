import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Logo, CoverLanding, ArrowSend, SecondCoverLanding, ImagenVende1 } from 'ui/constants'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);


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
            <div className='outer-wrapper'>
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
                <section className='block' id='static'>
                    <div className='holder' id="container">
                        <div id="component">
                            <Image src={ImagenVende1} width="417" height="478" alt='Vende tu propiedad' />
                            <p>Queremos hacer de este proceso una experiencia extraordinaria.</p>
                        </div>
                        <div id="component">
                            <Image src={ImagenVende1} width="417" height="478" alt='Vende tu propiedad' />
                            <p>Queremos hacer de este proceso una experiencia extraordinaria.</p>
                        </div>
                        <div id="component">
                            <Image src={ImagenVende1} width="417" height="478" alt='Vende tu propiedad' />
                            <p>Queremos hacer de este proceso una experiencia extraordinaria.</p>
                        </div>
                        <div id="component">
                            <Image src={ImagenVende1} width="417" height="478" alt='Vende tu propiedad' />
                            <p>Queremos hacer de este proceso una experiencia extraordinaria.</p>
                        </div>
                        <div id="component">
                            <Image src={ImagenVende1} width="417" height="478" alt='Vende tu propiedad' />
                            <p>Queremos hacer de este proceso una experiencia extraordinaria.</p>
                        </div>
                    </div>
                </section>
                <section className='block' id='static'>
                    <div className='holder'>
                        <div className='container-fluid'>

                        </div>
                    </div>
                </section>
                <section className='block' id='static'>
                    <div className='holder'>
                        <div className='container-fluid'>

                        </div>
                    </div>
                </section>
                <section className='block' id='static'>
                    <div className='holder'>
                        <div className='container-fluid'>

                        </div>
                    </div>
                </section>
                
            </div>
        </ParallaxProvider>
    )
}