import React, { useEffect, useState } from 'react'
import "./estilos-cards.css"
import { NavLink } from 'react-router-dom';


export default function Cards({products}) {

    return (
        <div className='cards'>
            <img src={products.imagen} alt="Imagen del producto"/>
            <h4> {products.prod} </h4>
            <h5> {products.marca} </h5>
            <p> {products.precio} </p>
            <NavLink to={`/item/${products.id}`} className="detalle" >Detalle del producto</NavLink>

        </div>
    )
}

