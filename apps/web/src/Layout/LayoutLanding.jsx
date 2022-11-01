import React from 'react'
import Head from 'next/head'
import { ParallaxProvider } from "react-scroll-parallax"
import NavbarLanding from '../Components/NavbarLanding/NavbarLanding'
import Footer from '../Components/Footer/Footer'

export default function LayoutLanding({ children }){
    return(
        <ParallaxProvider>
            <NavbarLanding />
            <div className='wrapper'>
                {children}
            </div>
            <Footer />
        </ParallaxProvider>
    )
}