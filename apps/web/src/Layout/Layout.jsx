import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer';
import { ParallaxProvider } from "react-scroll-parallax";


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
            </Head>
            <Navbar />
            <div className="whats d-none d-sm-none d-md-block">
                <ul>
                    <li className="whatsapp"><a href="https://wa.me/+522213634540" target="_blank" rel="noreferrer" className="icon-whatsapp"></a></li>
                    <li className="phone"><a href="tel:+52(222)2267440" target="_blank" rel="noreferrer" className="icon-number"></a></li>
                </ul>
            </div>
            <div className='outer-wrapper' style={router.route == "/propiedad/[slug]" ? {contain: "inherit"} : {}}>
                {children}
            </div>
            <Footer />
        </ParallaxProvider>
    )
}