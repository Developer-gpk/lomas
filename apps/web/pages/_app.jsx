import React, { useEffect } from 'react'
import Script from 'next/script'
import { HubspotProvider } from 'next-hubspot';
import AOS from 'aos'
import 'swiper/scss'
import 'swiper/css/effect-fade'
import '../src/css/normalize.css'
import '../src/css/global.scss'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import '../src/css/layout.css'
import '../src/css/list.css'
import '../src/css/search.css'
import '../src/css/category.css'
import '../src/css/conocenos.css'
import '../src/css/vende.css'
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
        AOS.init({
          duration: 2000
        })
    }, [])
    return (
      <HubspotProvider>
        <Script id='analytics-cdn' strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=UA-123850556-88`} />
        <Script id='script-analytics' strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
                    
            gtag('config', 'UA-123850556-88');
          `}
        </Script>
        <Script id='script-facebook' strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1032196294843648');
            fbq('track', 'PageView');
          `}
        </Script>
        <Component {...pageProps} />
      </HubspotProvider>
    )
}

export default MyApp