import React from 'react'

const UpperDashboard = () => {
    return (
        <div className="col-md-12 border">
            <div className="row">
                <h2 className="text-primary">I am a Dashboard
                    {/* icono de tablita del dashboard */}
                    <span className="bi bi-ui-checks"></span></h2>
            </div>
            <div className="row">
                <label className="text-secondary">CIUDAD: </label>
            </div>
            <div className="row">
                <label className="text-secondary">TEMPERATURA MAXIMA: </label>
            </div>
            <div className="row">
                <label className="text-secondary">TEMPERATURA MAX PROMEDIO 5 dias</label>
            </div>
            <div className="row">
                <label className="text-secondary">TEMPERATURA MIN PROMEDIO 5 dias</label>
            </div>
            <div className="row">
                <label className="text-secondary">HORA LOCAL</label>
            </div>
            <div className="row">
                <div className="col border">
                    <i className="bi bi-cloudy bi-2x" /><br />
                    <label className="text-secondary">MON</label>
                    <label className="text-secondary">TEMP MON :</label>
                </div>
                <div className="col border">
                    <i className="bi bi-cloudy bi-2x" /><br />
                    <label className="text-secondary">TUE</label>
                    <label className="text-secondary">TEMP TUE: </label>
                </div>
                <div className="col border">
                    <i className="bi bi-cloudy bi-2x" /><br />
                    <label className="text-secondary">WED</label>
                    <label className="text-secondary">TEMP WED: </label>
                </div>
                <div className="col border">
                    <i className="bi bi-cloudy bi-2x" /><br />
                    <label className="text-secondary">THU</label>
                    <label className="text-secondary">TEMP THU: </label>
                </div>
                <div className="col border">
                    <i className="bi bi-cloudy bi-2x" /><br />
                    <label className="text-secondary">FRI</label>
                    <label className="text-secondary">TEMP FRI: </label>
                </div>
            </div>
        </div>

    )
}

export default UpperDashboard
