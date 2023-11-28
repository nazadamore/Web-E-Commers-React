import React, { useEffect, useState } from 'react'
import { Spinner } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Nosotros() {

    const [loading, setLoading] = useState(true)

    const cambiarEstado = () => {
            setTimeout( () => {
                setLoading(false);
            }, 500)
    }

    if (loading) {
        cambiarEstado()
        return (
            <div className='prod-container'>
            <Spinner color='light' className='spinner'/>
            </div>
        )
    } else {
        return (
            <div className='prod-container'>
                <h1>Nosotros</h1>
                <p>Esta es la pagina de nosotros</p>
                <br />
            </div>
        )
    }
}
