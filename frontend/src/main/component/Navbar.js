import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css';

const Navbar = () => {
    return (
        <>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <a className="logo mr-auto"><Link to="/"><img src="assets/img/logo-white.svg" alt /></Link></a>
                    <nav className="navbar navbar-expand-lg d-none d-lg-block navbar-light nav-menu">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active"><a className="nav-link"><Link to="/">Home</Link></a></li>
                                <li className="nav-item" ><a className="nav-link"><Link to="/aboutus">About</Link></a></li>
                                <li className="nav-item" ><a className="nav-link"><Link to="/contact">Contact</Link></a></li>
                                <li className="nav-item"><a className="nav-link"><Link to="/Drivewithassar">Drive with Assar</Link></a></li>
                                <li className="nav-item"><a className="nav-link"><Link to="/Franchise">Franchise</Link></a></li>
                                <span>
                                    <Link to="/login"><a className="icon_user_profile" data-toggle="modal" data-target="#exampleModal"><i className="bx bx-user-circle" /></a></Link>
                                </span>
                            </ul>
                        </div>
                    </nav>

                    {/* .nav-menu */}
                </div>
            </header>
        </>
    )
}

export default Navbar