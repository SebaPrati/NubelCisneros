import React from 'react'
import Style from './Style.js'
import "./Navbar.css"

const Navbar = () => {
    return (

        <div className="bg">
            <head>
                <Style />
            </head>
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="icon">

                        <i className="icon material-icons">flutter_dash</i>&nbsp;El Sueño de Nubel</a>
                    {/* <i className="bi bi-cloudy"></i>&nbsp;Weather App</a> */}
                </nav>
            </div>
        </div>

    )
}

export default Navbar
