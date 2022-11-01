import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Logo, Dropdown, LomasMobile } from 'ui/constants'

export default function NavbarLanding(){
    const [checked, setChecked] = useState(false)
    const route = useRouter()
    const [isActive, setIsActive] = useState(false)
    const [isClick, setIsClick] = useState(false)
    const chageBackground = () =>{
        if(window.scrollY >= 80){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    useEffect(() => {
        chageBackground()
        window.addEventListener('scroll', chageBackground)
    })
    return(
        <section className={`navlanding ${checked ? 'isChecked' : ''} ${isActive ? 'isScroll' : ''}`}>
            <div className='holder'>
                <nav className='navbar-custom'>
                    <input id="nav-toggle" type="checkbox" onClick={() => setChecked(!checked)} />
                    <Link href="/">
                        <a className={`logo d-none d-sm-none d-md-block ${isActive ? 'isScroll' : ''}`}><Image src={Logo} /></a>
                    </Link>
                    <Link href="/">
                        <a className={`logo d-block d-sm-block d-md-none ${isActive ? 'isScroll' : ''} ${route.asPath.slice(1)}`}>
                            <div className={`${isActive ? 'isHidden' : 'isShow'}`}>
                                <Image src={Logo} alt="Logo Lomas Home" />
                            </div>
                            <div className={`${isActive ? 'isShow' : 'isHidden'}`}> 
                                <Image   src={LomasMobile} alt="Logo Lomas Home" />
                            </div>
                        </a>
                    </Link>
                    <label htmlFor="nav-toggle" className="icon-burger">
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </label>
                </nav>
            </div>
        </section>
    )
}