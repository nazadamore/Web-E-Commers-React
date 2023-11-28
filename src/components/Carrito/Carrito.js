import React, { useContext } from 'react'
import { ContextColection } from '../../context/ContextColection'
import { Link } from 'react-router-dom'


export default function Carrito() {

    const { carrito, precioTotal, vaciarCarrito } = useContext(ContextColection)

    const handleVaciar = () => {
        vaciarCarrito()
    }

    return (
        <div className='prod-container'>
            <h1>CARRITO</h1>
            <div className='productos'>
                {
                    carrito.map((prod) => (

                        <div key={prod.id} className='cards'>
                            <h2>{prod.marca}</h2>
                            <p> {prod.prod} </p>
                            <p>Precio unitario: ${prod.precio}</p>
                            <p>Precio total: ${prod.precio * prod.cantidad}</p>
                            <p>CANT: {prod.cantidad} </p>
                        </div>

                    ))
                }
            </div>
            {
                carrito.length > 0 ?
                <>
                    <h2>Precio total: ${precioTotal()}</h2>
                    <button onClick={handleVaciar} className='boton1'>Vaciar</button>
                    <Link to={"/checkout"} className='boton1'>Finalizar compra</Link>
                </>:
                <p>El carrito está vacío</p>
            }

            <br />
        </div>
    )
}
