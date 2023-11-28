import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { ContextColection } from '../../context/ContextColection'
import { Spinner } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



export default function ItemDetail({ products }) {

    const { carrito, agregarAlCarrito } = useContext(ContextColection)

    const [cantidad, setCantidad] = useState(1)

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < products.stock && setCantidad(cantidad + 1)
    }


    const [loading, setLoading] = useState(true)

    const cambiarEstado = () => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }

    if (loading) {
        cambiarEstado()
        return (
            <div className='prod-container'>
                <Spinner color='light' className='spinner' />
            </div>
        )
    } else {
        return (
            <div className='cards'>
                <img src={products.imagen} alt="Imagen del producto" />
                <h4> {products.prod} </h4>
                <p> {products.precio} $ </p>
                <p> {products.descripcion} </p>
                <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={() => { agregarAlCarrito(products, cantidad) }} />
            </div>
        )
    }
}
