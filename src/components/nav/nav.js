import React from "react";
import { Link } from "react-router-dom";

import './nav.css';

export default class NavBar extends React.Component{

    render(){
        return(
            <nav className="navContainer">
                <div className="navLogo">
                    <img alt="logo" className="navImg" src="https://www.onedersolutions.com/static/media/logo.b006b0e5.png" />
                </div>
                <div className="navMenu">
                    <div className="navItem">
                        <Link className="navLink" to="/">Inicio</Link>
                    </div>
                    <div className="navItem">
                        <Link className="navLink" to="/clients">Clientes</Link>
                    </div>
                    <div className="navItem">
                        <Link className="navLink" to="/contact">Contacto</Link>
                    </div>
                </div>
            </nav>
        )
    }
}