import React, { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import History from './History';


const SearchBox = () => {
const texto = useRef(null);

    const AgregarCiudad = e => {
        let ciudad = texto.current.value;
        const dispatch = useDispatch();
        console.log('beforedispatch',ciudad);
       
        useEffect (() => {
            fetch("https://api.openweathermap.org/data/2.5/forecast/daily?q=montevideo&cnt=5&appid=e62b2530fdb5f4ba3559c07c8634e5c7")
            .then(r => r.json())
            // .then(listaTareas=> {
            //     dispatch({type: "CARGAR TAREAS", payload:listaTareas});
    
            //})
        }, [])   

        dispatch({ type: 'AGREGAR', ciudad })
    }

    return (
        <><div className='row'>
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
            {/* <div className='row'>
                <ul>
                    <History />
                </ul>
            </div> */}
            </>

    )
}

export default SearchBox
