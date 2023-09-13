import React from 'react'

export default function Cards({productito}) {
    return (
        <div className='cards'>
            <img src={productito.imagen}/>
            <h4> {productito.prod} </h4>
            <h5> {productito.marca} </h5>
            <p> {productito.precio} </p>
        </div>
    )
}
