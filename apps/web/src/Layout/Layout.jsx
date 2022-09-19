import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer';
import { ParallaxProvider } from "react-scroll-parallax";


export default function Layout({children}){
    return(
        <ParallaxProvider> 
            <Navbar />
            <div className="whats d-none d-sm-none d-md-block">
                <ul>
                    <li className="whatsapp"><a href="https://wa.me/2227205273" target="_blank" className="icon-whatsapp"></a></li>
                    <li className="phone"><a href="tel:+522226570952" target="_blank" className="icon-number"></a></li>
                </ul>
            </div>
            <div className='outer-wrapper'>
                {children}
            </div>
            <Footer />
        </ParallaxProvider>
    )
}