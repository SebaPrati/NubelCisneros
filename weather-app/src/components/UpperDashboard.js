import { useEffect } from "react";
import React from 'react';
import initialState from "../store/initialState";
import {useSelector} from 'react-redux';



const UpperDashboard = (state= initialState) => {
    const ciudad = useSelector(state => state.ciudad);
    const tempMax = forecast.;
    const promMax = 0;
    const promMin = 0;
    
    return (
        <div className="col-md-12 border">
            <div className="row">
                <h2 className="text-primary">{ciudad}
                    {/* icono de tablita del dashboard */}
                    <span className="bi bi-ui-checks"></span></h2>
            </div>
            <div className="row">
                <label className="text-secondary">TEMPERATURA MAXIMA: {tempMax} </label>
            </div>
            <div className="row">
                <label className="text-secondary">TEMPERATURA MAX PROMEDIO: {promMax} </label>
            </div>
            <div className="row">
                <label className="text-secondary">TEMPERATURA MIN PROMEDIO: {promMin}</label>
            </div>
            <div className="row">
                <label className="text-secondary">HORA LOCAL</label>
            </div>
            <div className="row">
                <div className="col border">
                    <i className="bi bi-cloudy bi-2x" /><br />
                    <label className="text-secondary">MON</label><br />
                    <label className="text-secondary">TEMP MON :</label>
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

export default UpperDashboard
