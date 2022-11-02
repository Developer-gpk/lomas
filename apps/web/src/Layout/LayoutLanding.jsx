import React from 'react'
import Head from 'next/head'
import { ParallaxProvider } from "react-scroll-parallax"
import NavbarLanding from '../Components/NavbarLanding/NavbarLanding'
import Footer from '../Components/Footer/Footer'

export default function LayoutLanding({ children }){
    return(
        <ParallaxProvider>
            <Head>
                <title>Vende tu propiedad | Lomas Home</title>
                <meta name="author" content="Goplek" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" href="/favicon.ico" type="icon" />
                <meta name="facebook-domain-verification" content="80yvt6v7m30pkqcd4f9t31sue5ktlo" />
            </Head>
            <noscript>
                <img height="1" width="1" style={{"display": "none"}} src="https://www.facebook.com/tr?id=1032196294843648&ev=PageView&noscript=1" />
            </noscript>
            <NavbarLanding />
            <div className='wrapper'>
                {children}
            </div>
            <Footer />
        </ParallaxProvider>
    )
}