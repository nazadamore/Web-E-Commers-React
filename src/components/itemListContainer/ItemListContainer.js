import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import "./estilos-cards.css"
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Spinner } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const categoria = useParams().categoria

    useEffect(() => {

        const productosRef = collection(db, "products")
        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef
        

        getDocs(q)
            .then((resp) => {
                setProductos(
                resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id}
                }))
            })
        
    }, [categoria])

    const [loading, setLoading] = useState(true)

    const cambiarEstado = () => {
            setTimeout( () => {
                setLoading(false);
            }, 3000)
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

    
}
