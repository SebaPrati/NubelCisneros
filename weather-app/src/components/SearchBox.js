import React, { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import './SearchBox.css'

const SearchBox = e => {
    const texto = useRef(null);
    const dispatch = useDispatch();


    useEffect(() => {
        const url2 = `https://api.openweathermap.org/data/2.5/forecast/daily?q=Montevideo&cnt=5&appid=e62b2530fdb5f4ba3559c07c8634e5c7&units=metric`;
        fetch(url2)
            .then(r => r.json())
            .then(datos => {
                // console.log(datos.lista);
                dispatch({ type: "CARGA_INICIAL", payload: datos.list, ciudad: datos.city.name });
            })
})




    const AgregarCiudad = e => {
        let ciudad = texto.current.value;
        var count=0 ;

        if (ciudad === "") {
            
            
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

            
            



            
            
            
            
            
            






        } else {
            const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${ciudad}&cnt=5&appid=e62b2530fdb5f4ba3559c07c8634e5c7&units=metric`;
            // console.log('beforedispatch', ciudad);
            fetch(url)
                .then(r => r.json())
                .then(datos => {
                    // console.log(datos.lista);
                    dispatch({ type: "DATOS_PRONOSTICO", payload: datos.list, ciudad: datos.city.name });
                })
        }
        
        
        
        // let dias5 = "";
       
        
//Posibles mensajes de error:
//zaraza = {"cod":"404","message":"city not found"}
//ciudad vacia = {"cod":"400","message":"Nothing to geocode"}
//número entre 
        
         
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
