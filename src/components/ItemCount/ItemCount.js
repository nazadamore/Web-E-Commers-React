import React from 'react'

export default function ItemCount( {cantidad, handleRestar, handleSumar, handleAgregar} ) {

    return (
        <div className='container-count'>
            <div className='item-count'>
                <button onClick={ handleRestar }>-</button>
                <p> {cantidad} </p>
                <button onClick={ handleSumar }>+</button>
            </div>
            <button className='boton' onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    )
}
