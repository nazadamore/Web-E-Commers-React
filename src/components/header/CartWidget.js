import React, { useContext } from 'react'
import { BiCart } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { ContextColection } from '../../context/ContextColection';

export default function CartWidget() {

    const {cantidadEnCarrito} = useContext(ContextColection)

    return (
        <Link to="/carrito">
        <div className='div-carro'>
            <BiCart/>
            <p>{cantidadEnCarrito()}</p>
            </div>
        </Link>
    )
}
