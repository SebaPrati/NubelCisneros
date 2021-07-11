import React from 'react'
import Style from './Style.js'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <head>
                <Style />
            </head>
            <div class='row'>
                <div class='col-3'>
                    <nav className="navbar">
                        <a className="mat-icon">
                            <i className="icon material-icons">flutter_dash</i> El clima según Nubel</a>
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default Navbar
