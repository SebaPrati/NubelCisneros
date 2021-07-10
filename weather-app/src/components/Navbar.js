import React from 'react'
import Style from './Style.js'
import "./Navbar.css"

const Navbar = () => {
    return (

        <div>
            <head>
                <Style />
            </head>
            <div>
                <nav className="navbar">
                    <a className="mat-icon">
                        <i className="icon material-icons">flutter_dash</i>&nbsp;El clima segun Nubel</a>
                    {/* <i className="bi bi-cloudy"></i>&nbsp;Weather App</a> */}
                </nav>
            </div>
        </div>

    )
}

export default Navbar
