import { useEffect } from "react";
import React from 'react';
import initialState from "../store/initialState";
import { useSelector } from 'react-redux';
import "./UpperDashboard.css"

const temperaturas = {
    min: 0,
    max: 0,
}


const UpperDashboard = (state = initialState.forecast) => {
    let forecast = useSelector(state => state.forecast);
    let ciudad = useSelector(state => state.ciudad);

    console.log("FORECAST: ", forecast);
    console.log("CIUDAD: ", ciudad);


    const valoresTemp = {
        promMax: 0,
        promMin: 0,
        tempMax: 0,
        tempMin: 0,
        ciudad: ciudad,
        maxDias: [],
        minDias: [],
        tempMon: 0,
        tempTue: 0,
        tempWed: 0,
        tempThu: 0,
        tempFri: 0

    }

    //<----------------------------------------------------------->
    function Calculos(forecast) {

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
    function Promedios(temps) {
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

    const currentDateTime = Date().toLocaleString()

    console.log("LAST UPDATED: ", currentDateTime);


    return (
        <div>
            <div className="row">
                <h2 className="text-primary letrasGrandes">{valoresTemp.ciudad}, Temperatura de hoy: {valoresTemp.maxDias[0]} ºC
                    <span className="bi bi-ui-checks"></span></h2>
            </div>
            <div className="col-3"></div>
            <div className="col-6 letrasChicas fecha">
                <div className="row center">
                    <label className="text-secondary">TEMPERATURA MAXIMA: {valoresTemp.tempMax} ºC</label>
                </div>
                <div className="row center">
                    <label className="text-secondary">TEMPERATURA MINIMA: {valoresTemp.tempMin} ºC</label>
                </div>
                <div className="row center">
                    <label className="text-secondary">TEMPERATURA MAX PROMEDIO: {valoresTemp.promMax} ºC</label>
                </div>
                <div className="row center">
                    <label className="text-secondary">TEMPERATURA MIN PROMEDIO: {valoresTemp.tempMin} ºC</label>
                </div>
            </div>
            <div className="col-3"> </div>
            <div className="row letrasChicas">
                <div className="col border">
                    <i className="bi bi-cloudy bi-2x" /><br />
                    <label className="text-secondary fecha">{fecha(1)}</label><br />
                    <label className="text-secondary">Max : {valoresTemp.maxDias[1]} ºC</label><br/>
                    <label className="text-secondary">Min : {valoresTemp.minDias[1]} ºC</label>
                </div>
                <div className="col border">
                    <i className="bi bi-cloudy bi-2x" /><br />
                    <label className="text-secondary fecha">{fecha(2)}</label><br />
                    <label className="text-secondary">Max : {valoresTemp.maxDias[2]} ºC</label><br/>
                    <label className="text-secondary">Min : {valoresTemp.minDias[2]} ºC</label>
                </div>
                <div className="col border">
                    <i className="bi bi-cloudy bi-2x" /><br />
                    <label className="text-secondary fecha">{fecha(3)}</label><br />
                    <label className="text-secondary">Max : {valoresTemp.maxDias[3]} ºC</label><br/>
                    <label className="text-secondary">Min : {valoresTemp.minDias[3]} ºC</label>
                </div>
                <div className="col border">
                    <i className="bi bi-cloudy bi-2x" /><br />
                    <label className="text-secondary fecha">{fecha(4)}</label><br />
                    <label className="text-secondary">Max : {valoresTemp.maxDias[4]} ºC</label><br/>
                    <label className="text-secondary">Min : {valoresTemp.minDias[4]} ºC</label>
                </div>
                <div className="col border">
                    <i className="bi bi-cloudy bi-2x" /><br />
                    <label className="text-secondary fecha">{fecha(5)}</label><br />
                    <label className="text-secondary">Max : {valoresTemp.maxDias[5]} ºC</label><br/>
                    <label className="text-secondary">Min : {valoresTemp.minDias[5]} ºC</label>
                </div>
                <div className="row">
                    <label className="text-secondary"></label>
                </div>
                <div className="row">
                    <br />
                </div>
                <div className="row">
                    <label className="text-secondary">ULTIMA ACTUALIZACION {currentDateTime}</label>
                </div>
            </div>
        </div>

    )
}

function fecha(sumarDias) {
    var hoy = new Date();
    hoy.setDate(hoy.getDate() + sumarDias);

    var weekday = new Array(7);
    weekday[0] = "Domingo";
    weekday[1] = "Lunes";
    weekday[2] = "Martes";
    weekday[3] = "Miércoles";
    weekday[4] = "Jueves";
    weekday[5] = "Viernes";
    weekday[6] = "Sábado";
    var n = weekday[hoy.getDay()]+" "+hoy.getDate()+"/"+String(hoy.getMonth() + 1);   

    return n
}

export default UpperDashboard
