import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {doc, getDoc} from "firebase/firestore"  
import { db } from '../../firebase/config'


export default function ItemDetailContainer() {

    const id = useParams().id

    const [productos, setProductos] = useState([])


    useEffect(() => {

        const docRef = doc(db, "products", id)
        getDoc(docRef)
            .then((resp) => {
                setProductos(
                {...resp.data(), id: resp.id})
            })

    }, [id])

    return (
        <div className='detail-container'>
            <h1 className='titulo'>DETALLE</h1>
            <div className='productos'>
                <ItemDetail products={productos} />
            </div>
        </div>
    )
}
