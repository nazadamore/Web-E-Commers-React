import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import "./estilos-cards.css"
import data from '../../data/data.json'
import { useParams } from 'react-router-dom'

export default function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const categoria = useParams().categoria


    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                if (categoria) {
                    setProductos( res.filter((prod) => prod.categoria === categoria) )
                } else {
                    setProductos(res)
                }
            })
    }, [categoria])

    return (
        <div className='prod-container'>
            <h1 className='titulo'>PRODUCTOS</h1>
            <div className='productos'>
                {productos.length > 0 &&
                    productos.map((elm, i) => {
                        return <Cards key={i} products={elm} />
                    })
                }
            </div>
        </div>
    )
}
