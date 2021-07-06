import React from 'react'

const UpperDashboard = () => {
    return (

        <div className="col-md-9 border">
            <div className="row">
                <h2 className="text-primary">I am a Dashboard
                    <span className="bi bi-ui-checks"></span></h2>
            </div>
            <div className="row">
                <label className="text-secondary">one row</label>
            </div>
            <div className="row">
                <label className="text-secondary">two row</label>
            </div>
            <div className="row">
                <label className="text-secondary">three row</label>
            </div>
            <div className="row">
                <label className="text-secondary">four row</label>
            </div>
            <div className="row">
                <div className="col-md-6 border">
                    <label className="text-secondary">five row with col left</label>
                </div>
                <div className="col-md-6 border">
                    <i className="bi bi-cloudy bi-10x"/><br/>
                    <label className="text-secondary">five row with col right</label>
                </div>
            </div>
        </div>

    )
}

export default UpperDashboard
