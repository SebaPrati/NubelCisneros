// import { useEffect } from "react";
import React from 'react';
import initialState from "../store/initialState.js";
import { useSelector } from 'react-redux';

const temperaturas = {
    min: 0,
    max: 0,
}

let valoresTemp = {
    promMax:0,
    promMin:0,
    tempMax:0,
    tempMin:0,
    ciudad: ""
}






// const UpperDashboard = () => {
const UpperDashboard = (state= initialState) => {
    let forecast = useSelector(state => state.forecast);
    console.log("ACA ESTA EL FORECAST: ", forecast);

//     valoresTemp.ciudad = useSelector(state => state.ciudad);
//     calculos(forecast.list);
//     console.log("LINEA 24: ", forecast.list);

//     // let tempMax = state.list[0].temp.max;
// // console.log("STATE", state);


    
    
    
    // let tempMax = forecast[0].temp.max;
    
    
    
    
    
    
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
                <label className="text-secondary">TEMPERATURA MAXIMA: {valoresTemp.tempMax} </label>
                {/* <label className="text-secondary">TEMPERATURA MAXIMA: {tempMax} </label> */}
            </div>
            <div className="row">
                <label className="text-secondary">TEMPERATURA MAX PROMEDIO: {valoresTemp.promMax} </label>
            </div>
            <div className="row">
                <label className="text-secondary">TEMPERATURA MIN PROMEDIO: {valoresTemp.tempMin}</label>
            </div>
            <div className="row">
                <label className="text-secondary">HORA LOCAL</label>
            </div>
            <div className="row">
                <div className="col border">
                    <i className="bi bi-cloudy bi-2x" /><br />
                    <label className="text-secondary">MON</label><br />
                    <label className="text-secondary">TEMP MON : {valoresTemp.tempMin}</label>
                </div>
                <div className="col border">
                    <i className="bi bi-cloudy bi-2x" /><br />
                    <label className="text-secondary">TUE</label><br />
                    <label className="text-secondary">TEMP TUE: </label>
                </div>
                <div className="col border">
                    <i className="bi bi-cloudy bi-2x" /><br />
                    <label className="text-secondary">WED</label><br />
                    <label className="text-secondary">TEMP WED: </label>
                </div>
                <div className="col border">
                    <i className="bi bi-cloudy bi-2x" /><br />
                    <label className="text-secondary">THU</label><br />
                    <label className="text-secondary">TEMP THU: </label>
                </div>
                <div className="col border">
                    <i className="bi bi-cloudy bi-2x" /><br />
                    <label className="text-secondary">FRI</label><br />
                    <label className="text-secondary">TEMP FRI: </label>
                </div>
            </div>
        </div>

    )
}


const calculos = (_forecast) => {
    console.log("calculos", _forecast);

    console.log(_forecast);
    //console.log(Object.size(_forecast));
}

export default UpperDashboard
