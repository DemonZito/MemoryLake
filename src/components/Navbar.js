import React, {useState} from 'react'
import logo from '../brain-leak.svg'
import styles from './Navbar.css'; 

export const NavigationBar = () => {
    return ( 
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} className="logo"></img>
                    Memory Lake
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}