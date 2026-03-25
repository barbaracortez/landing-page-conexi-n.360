import React from "react";
import './styles/Header.css';
import logo from '../assets/logo-360.png';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Conexión 360 Logo" className="logo" />
            <nav>
                <ul>
                    <li><a href="./Hero.jsx">Inicio</a></li>
                    <li><a href="./Features.jsx">Servicios</a></li>
                    <li><a href="./Footer.jsx">Contacto</a></li>

                </ul>
            </nav>
        </header>
    )
};

export default Header;
