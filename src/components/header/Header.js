import React from 'react'
import NavBar from './NavBar';
import Carruti from './CartWidget';
import "./estilo-header.css";


export default function Header() {
    const navBar = [
        {
            link: "Inicio"
        },
        {
            link: "Productos"
        },
        {
            link: "Contacto"
        }
    ]

    const carrito = 0

    return (
        <header className='header'>
            <div className='navBar'>
                <nav>
                    {navBar.map( (elm) => {
                        return <NavBar link={elm.link}/>  
                    })}
                </nav>
                <Carruti carro={carrito} />
            </div>
        </header>
    )
}
