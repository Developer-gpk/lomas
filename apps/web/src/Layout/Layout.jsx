import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer';
import { ParallaxProvider } from "react-scroll-parallax";


export default function Layout({children}){
    return(
        <ParallaxProvider> 
            <Navbar />
            <div className='outer-wrapper'>
                {children}
            </div>
            <Footer />
        </ParallaxProvider>
    )
}