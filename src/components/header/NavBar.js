import React from 'react'
import Carruti from './CartWidget';
import "./estilo-header.css";
import { Link } from 'react-router-dom';


export default function NavBar() {

    const carrito = 0

    return (
        <header className='header'>
            <div className='navBar'>
                <nav>
                    <li><Link to="/">Incio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/productos/samsung" className='categorias'>Samsung</Link></li>
                    <li><Link to="/productos/iphone" className='categorias'>Iphone</Link></li>
                    <li><Link to="/productos/xioami" className='categorias'>Xiaomi</Link></li>
                    <li><Link to="/contactos">Contactos</Link></li>
                </nav>
                <Link><Carruti carrito={carrito}/></Link>
            </div>
        </header>
    )
}
