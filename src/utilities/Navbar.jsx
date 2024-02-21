import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/imgs/logo.png';
import './utilities.css';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} width="160px" height="auto" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-md-5 ps-md-5" id="navbarSupportedContent">
                        {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul> */}

                        <ul className="nav nav-pills w-100 border-bottom ms-5" id="pills-tab" role="tablist">
                            <li className="nav-item" >
                                <NavLink exact to="/" activeClassName="active" className="nav-link nav_link" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item" >
                                <NavLink to="/about" activeClassName="active" className="nav-link nav_link">About</NavLink>
                            </li>
                            <li className="nav-item" >
                                <NavLink to="/shop" activeClassName="active" className="nav-link nav_link">Shop</NavLink>
                            </li>
                            <li className="nav-item" >
                                <NavLink to="/contact" activeClassName="active" className="nav-link nav_link">Contact</NavLink>
                            </li>

                            <li className="nav-item ms-auto" >
                                <Link className="nav-link nav_link" to="/search"><i className="bi bi-search"></i></Link>
                            </li>
                            <li className="nav-item px-0 mx-0" >
                                <Link className="nav-link nav_link px-2" to="/user"><i className="bi bi-person-circle"></i></Link>
                            </li>
                            <li className="nav-item px-0 mx-0" >
                                <Link className="nav-link nav_link px-2" to="/cart"><i className="bi bi-cart-fill"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar