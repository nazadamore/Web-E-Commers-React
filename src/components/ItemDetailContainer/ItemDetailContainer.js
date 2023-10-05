import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import data from '../../data/data.json'


export default function ItemDetailContainer() {

    const id = useParams().id

    const [productos, setProductos] = useState([])

    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                const productoEncontrado = res.find((elm) => elm.id === parseInt(id));
                setProductos(productoEncontrado)
            })
    }, [id])

    return (
        <div className='prod-container'>
            <h1 className='titulo'>DETALLE</h1>
            <div className='productos'>
                <ItemDetail products={productos} />
            </div>
        </div>
    )
}
