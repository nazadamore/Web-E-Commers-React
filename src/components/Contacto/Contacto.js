import React, {useState} from 'react'
import { useForm } from "react-hook-form"
import { Spinner } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Contacto() {

    const { register, handleSubmit } = useForm()

    const enviar = (data) => {
        console.log(data)
    }


    const [loading, setLoading] = useState(true)

    const cambiarEstado = () => {
        setTimeout(() => {
            setLoading(false);
        }, 500)
    }

    if (loading) {
        cambiarEstado()
        return (
            <div className='prod-container'>
                <Spinner color='light' className='spinner' />
            </div>
        )
    } else {

        return (
            <div className='prod-container'>
                <h1>Contacto</h1>
                <form className='formulario' onSubmit={handleSubmit(enviar)}>
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
                    <button type='submit' className='boton'>Enviar</button>
                </form>
            </div>
        )
    }
}
