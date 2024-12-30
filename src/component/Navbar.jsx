import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cssfile/Navbar.css';
import { Link, useNavigation } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
                <div className="container">
                    <a href="" className="navbar-brand text-white font-weight-bold">
                        <img src="img/Bit3.png" alt="Shoes Icon" id='bitimg' />
                        <span id="logotext">BRILLIANCE INSTITUTE OF TECNNOLOGY</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navbarNav" data-bs-target="#navbarNav" data-toggle="collapse" data-target="#collapsenavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse borderXwidth " id="collapsenavbar">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <Link className="nav-link  text-white" to='/home'>HOME
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to='/about'>ABOUT US</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to='/courses' className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" aria-expanded="false" role="button" > 
                                    COURSES</Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to='/design'>
                                            WEB DESIGN
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to='/development'>
                                            WEB DEVELOPMENT
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to='/python'>
                                            PYTHON
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to='/seo'>
                                            SEO
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to='/'>
                                            LARAVAL
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to='/'>
                                            M S OFFICE
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to='/'>
                                            SHOPIFY
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to='/'>
                                            WORDPRESS
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link  text-white" to='/onlineAdd'>ONLINE ADDMISSION
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link  text-white" to='/contact'>CONTACT US
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
