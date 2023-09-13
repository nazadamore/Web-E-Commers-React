import React from 'react'
import { BiCart } from "react-icons/bi";

export default function Carruti({carro}) {
    const estilos ={
        color: "grey"
    }
    return (
        <div className='div-carro'> 
        <BiCart/>
        <p>{carro}</p>
        </div>
    )
}
