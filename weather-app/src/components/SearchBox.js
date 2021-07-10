import React, { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import './SearchBox.css'

const SearchBox = e => {
    const texto = useRef(null);
    const dispatch = useDispatch();


    useEffect(() => {
        const url2 = `https://api.openweathermap.org/data/2.5/forecast/daily?q=Montevideo&cnt=6&appid=e62b2530fdb5f4ba3559c07c8634e5c7&units=metric`;
        fetch(url2)
            .then(r => r.json())
            .then(datos => {
                dispatch({ type: "CARGA_INICIAL", payload: datos.list, ciudad: datos.city.name });
            })
    })

    const AgregarCiudad = e => {
        let ciudad = texto.current.value;
        var count=0 ;

        if (ciudad === "") {
<<<<<<< HEAD
            
            
            let msg = "";

            if (count  <= 1){
                

                let msgArray = [
                    "REALMENTE NECESITO UNA CIUDAD PARA FUNCIONAR :-)",
                    "CADA VEZ QUE PRESIONAS EL BOTÓN 'BUSCAR' SIN INGRESAR LA CIUDAD, MUERE UNA ESTRELLA EN ALGUNA GALAXIA DISTANTE."];

                alert(msgArray[Math.floor(Math.random() * msgArray.length)]);
                count++;
                console.log("COUNT extra: ", count);


            } else {
                alert("POR FAVOR INGRESE EL NOMBRE DE UNA CIUDAD")
                count++;
                console.log("COUNT inicial: ", count);

}

            
            



            
            
            
            
            
            






=======

            alert("POR FAVOR INGRESE EL NOMBRE DE UNA CIUDAD");
>>>>>>> aa51089fb23e5608653b6e3ce8071123991c51ed
        } else {
            const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${ciudad}&cnt=6&appid=e62b2530fdb5f4ba3559c07c8634e5c7&units=metric`;
            fetch(url)
                .then(r => r.json())
                .then(datos => {
                    dispatch({ type: "DATOS_PRONOSTICO", payload: datos.list, ciudad: datos.city.name });
                })
        }
    }

    return (
        <div className='topnav'>
            <a href="#about">Nosotros </a>
            <a href="#contact"> Contacto</a>
            <h2 className="text-secondary">Buscar Ciudad:</h2>
            <div className="container">
                <input className="form-control" id="searchinput" type="search" ref={texto} placeholder="Ingrese la ciudad.." />
                <span class="input-group-btn">
                    <button class="btn btn-search" type="button" onClick={AgregarCiudad}><i class="fa fa-search fa-fw"></i> Buscar</button>
                </span>
            </div>
        </div >
    )
}

export default SearchBox

