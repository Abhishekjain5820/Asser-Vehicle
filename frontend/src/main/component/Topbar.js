import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css';

const Topbar = () => {
    return (
        <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
            <div className="container d-flex justify-content-end">
                <div className="social-links align-items-left">
                    <a className="twitter"><Link to="/List-your-vehicle">List your vehicle</Link></a>
                    <a className="facebook"><Link to="/Offers">Offers</Link></a>
                    <a className="instagram"><Link to="/Carsubscription">Car Subscription</Link> </a>
                    <a className="skype"><Link to="/Carrer">Carrer</Link></a>
                    <a className="contact-info icofont-phone"><Link to="/Phone">+91-910-9999-666</Link></a>
                </div>
            </div>
        </div>
    )
}

export default Topbar