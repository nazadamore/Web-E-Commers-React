import React from 'react'
import { BiCart } from "react-icons/bi";

export default function Carruti({carrito}) {
    return (
        <div className='div-carro'> 
            <BiCart/>
            <p>{carrito}</p>
        </div>
    )
}
