import React from 'react'
import Cards from './Cards'
import "./estilos-cards.css"

export default function ItemListContainer() {

    const productos =[
        {
            imagen: "https://http2.mlstatic.com/D_NQ_NP_755977-MLA47780164967_102021-V.webp",
            prod: "Iphone 13 PRO MAX 256gb",
            marca: "Iphone",
            precio: 900
        },
        {
            imagen: "https://http2.mlstatic.com/D_NQ_NP_654151-MLA53448775145_012023-V.webp",
            prod: "Samsung S23 128gb",
            marca: "Samsung",
            precio: 600
        },
        {
            imagen: "https://http2.mlstatic.com/D_NQ_NP_683252-MLA43874063973_102020-V.webp",
            prod: "POCO X3 PRO 256gb",
            marca: "Xiaomi",
            precio: 400
        }
    ]

    return (
        <div className='prod-container'>
            <h1 className='titulo'>PRODUCTOS</h1>
            <div className='productos'>
                {productos.map((elm) => {
                    return <Cards productito={elm}/>
                })}
            </div>
        </div>
    )
}
