import React from 'react';
import {
    Link
  } from "react-router-dom";
import Logo from '../Logo/Logo';
import './NavBar.css';

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid hey">
                    <Link className="navbar-brand" to="/"><Logo/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" >
                        <li className="nav-item" >
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/aboutyou">About You</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/calendar">Calendar</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
    )
}