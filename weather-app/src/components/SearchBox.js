import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import History from './History';


const SearchBox = () => {

    const texto = useRef('')
    const dispatch = useDispatch()

    const agregarCiudad = e => {
        let ciudad = texto.current.value;
        dispatch({ type: 'AGREGAR', ciudad })
    }

    return (
        <><div className='row'>
            <h2 className="text-secondary">Search for a city:</h2>
            <div className="input-group mb-4">
                <input className="form-control" id="searchinput" type="search" ref={texto} aria-label="Search" />
                <div className="input-group-append">
                    <button className="btn btn-primary" id="searchbtn" type="submit" onClick={agregarCiudad}>
                        <i className="material-icons">search</i>
                    </button>
                    <hr />
                </div>
            </div>
        </div>
            <div className='row'>
                <ul>
                    <History />
                </ul>
            </div></>

    )
}

export default SearchBox
