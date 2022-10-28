import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BannerConocenos, Arrow1 } from "ui/constants"
import { ParallaxBanner } from 'react-scroll-parallax'

export default function Conocenos({ text1, text2 }){

    useEffect(() =>{
    })
    return(
        <div className='holder'>
            <ParallaxBanner
                className='conocenos-parallax-desk'
                style={{ 
                    aspectRatio: '2 / 1',
                    zIndex: "2",
                    height: "550px"
                }}
                layers={[
                    {
                        image:
                        BannerConocenos.src,
                        speed: -10,
                    },
                    {
                        children: (
                            <div className='container-fluid' data-aos="fade-up">
                                <div className='row content'>
                                <p>
                                    {text1} 
                                    <br/><br/>Buscamos hacer de este proceso una experiencia extraordinaria.
                                    <br/><br/>
                                    <span>{text2}</span>
                                    <br/><br/>
                                    <Link href="/conocenos">
                                    <a>Conoce más <Image src={Arrow1} alt="pin" width="13" height="12" layout={"fixed"} /></a>
                                    </Link>
                                </p>
                                </div>
                            </div>
                        )
                    }
                ]}
            />
        </div>
    )
}