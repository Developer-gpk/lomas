import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ParallaxBanner } from 'react-scroll-parallax'
import { CoverCreditos1, ArrowSend } from 'ui/constants'

export default function BannerCreditos(){
    return(
        <ParallaxBanner
            className='parallax-creditos-desk'
            style={{ 
                aspectRatio: '2 / 1',
                height: "480px"
            }}
            layers={[
                {
                    image: CoverCreditos1.src,
                    speed: -10,     
                },
                {
                    children: (
                        <section className='row text-center carousel-caption content-creditos'>
                            <h1>Te ayudamos a conseguir el financiamiento <span>que mejor se adapte a ti.</span></h1>
                            <div className='button'>
                                <Link href="/creditos#form-multistep">
                                    <a className='btn'>Empezar <Image src={ArrowSend} alt="pin" width="13" height="12" layout={"fixed"} /></a>
                                </Link>
                            </div>
                        </section>
                    )
                }
            ]}
        />
    )
}