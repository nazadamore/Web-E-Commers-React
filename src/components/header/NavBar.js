import React from 'react'
import "./estilo-header.css";
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


export default function NavBar() {


    return (
        <header className='header'>
            <div className='navBar'>
                <nav>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/productos/samsung" className='categorias'>Samsung</Link></li>
                    <li><Link to="/productos/iphone" className='categorias'>Iphone</Link></li>
                    <li><Link to="/productos/xioami" className='categorias'>Xiaomi</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                </nav>
                <CartWidget/>
            </div>
        </header>
    )
}
