import React, { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import './SearchBox.css'

const SearchBox = () => {
    const texto = useRef(null);
    const dispatch = useDispatch();

    const AgregarCiudad = e => {
        let ciudad = texto.current.value;
        let dias5 = "";
        const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${ciudad}&cnt=5&appid=e62b2530fdb5f4ba3559c07c8634e5c7&units=metric`;
        console.log('beforedispatch', ciudad);
        fetch(url)
            .then(r => r.json())
            .then(datos => {
                console.log(datos.lista);
                dispatch({ type: "DATOS_PRONOSTICO", payload:datos, ciudad: ciudad });
            })
    }

    return (
        <div className='topnav'>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <h2 className="text-secondary">Search for a City:</h2>
            <div className="input-group mb-4 material-icons active">
                 <input className="form-control" id="searchinput" type="search" ref={texto} placeholder="Search.." />
                  <button className="btn btn-primary" id="searchbtn" type="submit" onClick={AgregarCiudad}>
                        <i className="material-icons active">search</i> 
                    </button>
                    <hr />
         
            </div> 
        </div>
    )
}

export default SearchBox
