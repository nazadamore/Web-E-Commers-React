import React, { useContext, useState } from 'react'
import { ContextColection } from '../context/ContextColection'
import { useForm } from 'react-hook-form'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/config'

export default function Checkout() {

    const [pedidoId, setPedidoId] = useState("")

    const { carrito, precioTotal, vaciarCarrito } = useContext(ContextColection)

    const {register, handleSubmit} = useForm()

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido)

        const pedidosRef = collection(db, "pedidos")

        addDoc(pedidosRef, pedido)
            .then((doc) =>{
                setPedidoId(doc.id)
                vaciarCarrito()
            })
    }

    if (pedidoId){
        return(
            <div className='prod-container'>
                <h1>Muchas gracias por tu compra</h1>
                <p>El ID de tu pedido es: {pedidoId}</p>
            </div>
        )
    }
    return (
        <div className='prod-container'>
            <h1>Registrate para finalizar la compra</h1>
            <form className='formulario' onSubmit={handleSubmit(comprar)}>
                <input 
                    type='text' 
                    placeholder='Ingresa tu nombre'
                    {...register("nombre")}

                />
                <input 
                    type='email' 
                    placeholder='Ingresa tu mail'
                    {...register("email")}
                />
                <input 
                    type='phone' 
                    placeholder='Ingresa tu telefono'
                    {...register("telefono")}
                />
                <button type='submit' className='boton'>Comprar</button>
            </form>
        </div>
    )
}
