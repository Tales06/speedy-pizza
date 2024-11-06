import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    // Stato per tenere traccia dell'elemento attivo
    const [activeItem, setActiveItem] = useState("Home");

    // Funzione per aggiornare l'elemento attivo
    const handleItemClick = (name : string) => {
        setActiveItem(name);
    };

    return (
        <div className="container-nav">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Pizzeria Bho</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li 
                            className={`nav-item ${activeItem === "Home" ? "active" : ""}`} 
                            onClick={() => handleItemClick("Home")}
                        >
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li 
                            className={`nav-item ${activeItem === "Menu" ? "active" : ""}`} 
                            onClick={() => handleItemClick("Menu")}
                        >
                            <Link className="nav-link" to="/menu">Menu</Link>
                        </li>
                        <li 
                            className={`nav-item ${activeItem === "About" ? "active" : ""}`} 
                            onClick={() => handleItemClick("About")}
                        >
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li 
                            className={`nav-item ${activeItem === "Login/Registration" ? "active" : ""}`} 
                            onClick={() => handleItemClick("Login/Registration")}
                        >
                            <Link className="nav-link" to="/login">Login/Registration</Link>
                        </li>
                    </ul>
                </div>
                <span className="navbar-cart">
                    <i className="bi bi-cart"></i>
                </span>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <span className="navbar-sun">
                    <i className="bi bi-sun"></i>
                </span>
            </nav>
        </div>
    )
}
