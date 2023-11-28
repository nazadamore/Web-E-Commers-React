import { createContext, useEffect, useState } from "react";

export const ContextColection = createContext({})

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || []

export const CartProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState(carritoInicial)

    const agregarAlCarrito = (products, cantidad) => {
        console.log(products)
        console.log(cantidad)
        const itemAgregado = { ...products, cantidad }

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((prod) => prod.id === itemAgregado.id)
        console.log(estaEnElCarrito)

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado) 
        }
        setCarrito(nuevoCarrito);
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    useEffect(()=>{
        localStorage.setItem("carrito", JSON.stringify(carrito))
    },[carrito])

    return (
        <ContextColection.Provider value={{ carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito }}>
            {children}
        </ContextColection.Provider>
    )
}