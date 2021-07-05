import React from 'react'
import Style from './Style.js'


const Navbar = () => {
    return (

        <div>
            <head>
                <Style />
                <title>Nubel Cisneros App</title>
            </head>

            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    <i className="material-icons">wb_sunny</i>&nbsp;Nubel Ganso App</a>
            </nav>
        </div>

    )
}

export default Navbar
