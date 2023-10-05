import React from 'react'


export default function ItemDetail({products}) {
    return (
        <div className='cards'>
            <img src={products.imagen} alt="Imagen del producto"/>
            <h4> {products.prod} </h4>
            <p> {products.precio} $ </p>
            <p> {products.descripcion} </p>
        </div>
    )
}
