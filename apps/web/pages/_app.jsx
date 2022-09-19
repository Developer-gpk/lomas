import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import '../src/css/global.css'
import '../src/css/layout.css'
import '../src/css/index.css'
import '../src/css/list.css'
import '../src/css/creditos.css'
import '../src/css/propiedad.css'
import '../src/css/search.css'
import '../src/css/category.css'
import '../src/css/conocenos.css'
import '../src/css/vende.css'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    }, [])
    return (
      <Component {...pageProps} />
    )
}

export default MyApp