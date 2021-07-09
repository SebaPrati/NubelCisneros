import { useEffect } from "react";
import React from 'react';
import initialState from "../store/initialState";
import { useSelector } from 'react-redux';


const temperaturas = {
    min: 0,
    max: 0,
}



const UpperDashboard = (state = initialState.forecast ) => {
    let forecast = useSelector(state => state.forecast);
    let ciudad = useSelector(state => state.ciudad);
    
console.log("FORECAST: ", forecast);
console.log("CIUDAD: ", ciudad);

    
    const valoresTemp = {
        promMax: 0,
        promMin: 0,
        tempMax: 0,
        tempMin: 0,
        ciudad: "Montevideo",
        maxDias: [],
        minDias: [],
        tempMon: 0,
        tempTue: 0,
        tempWed: 0,
        tempThu: 0,
        tempFri: 0

    }

    //<----------------------------------------------------------->
    function Calculos (forecast) {
    
        let i = 0;
        console.log("CALCULOS", forecast);
        console.log("<--------------------->");


        forecast.forEach(element => {
        i++;
        console.log('Dia:' + i)
        console.log('maxima:', element.temp.max);
        console.log('minima:', element.temp.min);

        valoresTemp.maxDias.push(Number(element.temp.max))
        valoresTemp.minDias.push(Number(element.temp.min))
        
            
            
            
            
            
    });

    valoresTemp.tempMax = Math.max.apply(Math, valoresTemp.maxDias);
    valoresTemp.tempMin = Math.min.apply(Math, valoresTemp.minDias);

    valoresTemp.promMax = Promedios(valoresTemp.maxDias);
    valoresTemp.promMin = Promedios(valoresTemp.maxDias);

    console.log('maxima general:', valoresTemp.tempMax);
    console.log('minima general:', valoresTemp.tempMin);
    console.log('promedio maxima :', valoresTemp.promMax);
    console.log('promedio minima :', valoresTemp.promMin);

    return valoresTemp
        
    }


    Calculos(forecast);



    //<----------------------------------------------------------->
    function Promedios (temps) {
    let promedio = 0;
    let i = 0

    temps.forEach(element => {
        i++;
        promedio = promedio + Number(element);
    });

    return parseFloat(promedio / i).toFixed(2)
}

    //<----------------------------------------------------------->

    //LAST UPDATED------------------------------------------------>

    const currentDateTime= Date().toLocaleString()

    console.log("LAST UPDATED: ", currentDateTime);



    let arr = currentDateTime.split(" ");

    function DayOfWeek(arr) {

        switch (JSON.stringify(arr[0])) {
            case ("Mon"):
                console.log("Hoy es Lunes");
                break;
            case ("Tue"):
                console.log("Hoy es Martes");
                break;
            case ("Wed"):
                console.log("Hoy es Miercoles");
                break;
            case ("Thu"):
                console.log("Hoy es Jueves");
                break;
            case ("Fri"):
                console.log("Hoy es Viernes");
                break;
    
            default:
                break;
        }
        return console.log("ESTE ES EL RETORNO", JSON.stringify(arr[0]));
    }
        
    DayOfWeek(arr);
    
    //<----------------------------------------------------------->

    // console.log(forecast[0].temp.max);
    // valoresTemp.ciudad = useSelector(state => state.ciudad);
    // const valoresFinales = calculos(forecast.list);

    // console.log('valoresFinales', valoresFinales);

    return (
        <div className="col-md-12 border">
            <div className="row">
                <h2 className="text-primary">{valoresTemp.ciudad}
                    {/* icono de tablita del dashboard 
                    <img
                        src={`http://openweathermap.org/img/w/${apiData.list[0].weather[0].icon}​​​​​​​​.png`}
                        alt="weather status icon"
                        className="weather-icon"
                    />*/}
                    <span className="bi bi-ui-checks"></span></h2>
            </div>
            <div className="row">
                <label className="text-secondary">TEMPERATURA MAXIMA: { valoresTemp.tempMax} </label>
            </div>
            <div className="row">
                <label className="text-secondary">TEMPERATURA MINIMA: { valoresTemp.tempMin} </label>
            </div>
            <div className="row">
                <label className="text-secondary">TEMPERATURA MAX PROMEDIO: {valoresTemp.promMax} </label>
            </div>
            <div className="row">
                <label className="text-secondary">TEMPERATURA MIN PROMEDIO: {valoresTemp.tempMin}</label>
            </div>
           
            <div className="row">
                <div className="col border">
                    <i className="bi bi-cloudy bi-2x" /><br />
                    <label className="text-secondary">MON</label><br />
                    <label className="text-secondary">TEMP MON : { } </label>
                </div>
                <div className="col border">
                    <i className="bi bi-cloudy bi-2x" /><br />
                    <label className="text-secondary">TUE</label><br />
                    <label className="text-secondary">TEMP TUE: { } </label>
                </div>
                <div className="col border">
                    <i className="bi bi-cloudy bi-2x" /><br />
                    <label className="text-secondary">WED</label><br />
                    <label className="text-secondary">TEMP WED: {} </label>
                </div>
                <div className="col border">
                    <i className="bi bi-cloudy bi-2x" /><br />
                    <label className="text-secondary">THU</label><br />
                    <label className="text-secondary">TEMP THU: {} </label>
                </div>
                <div className="col border">
                    <i className="bi bi-cloudy bi-2x" /><br />
                    <label className="text-secondary">FRI</label><br />
                    <label className="text-secondary">TEMP FRI: {} </label>
                </div>
                <div className="row">
                    <label className="text-secondary"></label>
                </div>
                <div className="row">
                    <br/>
                </div>
                <div className="row">
                    <label className="text-secondary">ULTIMA ACTUALIZACION { currentDateTime }</label>
                </div>
            </div>
        </div>

    )
}


// const calculos = (forecast) => {
//     // solo es un comentario. 
//     let i = 0;
//     console.log("calculos", forecast);
//     forecast.forEach(element => {
//         i++;
//         console.log('Dia:' + i)
//         console.log('maxima:', element.temp.max);
//         console.log('minima:', element.temp.min);

//         valoresTemp.maxDias.push(Number(element.temp.max))
//         valoresTemp.minDias.push(Number(element.temp.min))
//     });

//     valoresTemp.tempMax = Math.max.apply(Math, valoresTemp.maxDias);
//     valoresTemp.tempMin = Math.min.apply(Math, valoresTemp.minDias);

//     valoresTemp.promMax = promedios(valoresTemp.maxDias);
//     valoresTemp.promMin = promedios(valoresTemp.maxDias);

//     console.log('maxima general:', valoresTemp.tempMax);
//     console.log('minima general:', valoresTemp.tempMin);
//     console.log('promedio maxima :', valoresTemp.promMax);
//     console.log('promedio minima :', valoresTemp.promMin);

//     return valoresTemp
// }

// const promedios = (temps) => {
//     let promedio = 0;
//     let i = 0

//     temps.forEach(element => {
//         i++;
//         promedio = promedio + element;
//     });

//     return parseFloat(promedio / i).toFixed(2)
// }


export default UpperDashboard
