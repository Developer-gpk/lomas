import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer';
import { ParallaxProvider } from "react-scroll-parallax";
import { WhatsApp, PhoneCTA, ArrowSend } from 'ui/constants'


export default function Layout({children, title, description, keywords}){
    const router = useRouter()
    return(
        <ParallaxProvider>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content="Goplek" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" href="/favicon.ico" type="icon" />
                <meta name="facebook-domain-verification" content="80yvt6v7m30pkqcd4f9t31sue5ktlo" />
            </Head>
            <noscript>
                <img height="1" width="1" style={{"display": "none"}} src="https://www.facebook.com/tr?id=1032196294843648&ev=PageView&noscript=1" />
            </noscript>
            <Navbar />
            <div className="whats d-none d-sm-none d-md-block">
                <ul>
                    <li className="whatsapp"><a href="https://wa.me/+522221853611" target="_blank" rel="noreferrer" className="icon-whatsapp"></a></li>
                    <li className="phone"><a href="tel:+52(222)6886134" target="_blank" rel="noreferrer" className="icon-number"></a></li>
                </ul>
            </div>
            <div className='outer-wrapper' style={router.route == "/propiedad/[slug]" ? {contain: "inherit"} : {}}>
                {children}
            </div>
            <Footer />
            <div className='redes d-block d-sm-block d-md-none'>
                <div className='content'>
                    <div className='whatsapp'>
                        <a href="https://wa.me/+522221853611" target="_blank" rel="noreferrer"><Image src={WhatsApp} /></a>
                    </div>
                    <div className='phone'>
                        <a href="tel:+52(222)6886134" target="_blank" rel="noreferrer"><Image src={PhoneCTA} /></a>
                    </div>
                    <Link href="/#contacto">
                        <a className='contacto'>
                            Enviar mensaje <Image src={ArrowSend} alt="pin" width="13" height="12" layout={"fixed"} />
                        </a>
                    </Link>
                </div>
            </div>
        </ParallaxProvider>
    )
}