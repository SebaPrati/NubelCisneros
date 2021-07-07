import React, { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';


const SearchBox = () => {
const texto = useRef(null);

const dispatch = useDispatch();

    const AgregarCiudad = e => {
        let ciudad = texto.current.value;
        console.log('beforedispatch',ciudad);
       
  
            fetch("https://api.openweathermap.org/data/2.5/forecast/daily?q=montevideo&cnt=5&appid=e62b2530fdb5f4ba3559c07c8634e5c7&units=metric")
            .then(r => r.json())
            .then(datos => {
                dispatch({type: "DATOS_PRONOSTICO", payload:datos.list, ciudad:ciudad});
            })
    }

    return (
        <div className='row'>
            <h2 className="text-secondary">Search for a city:</h2>
            <div className="input-group mb-4">
                <input className="form-control" id="searchinput" type="search" ref={texto} aria-label="Search" />
                <div className="input-group-append">
                    <button className="btn btn-primary" id="searchbtn" type="submit" onClick={AgregarCiudad}>
                        <i className="material-icons">search</i>
                    </button>
                    <hr />
                </div>
            </div>
        </div>            

    )
}

export default SearchBox
