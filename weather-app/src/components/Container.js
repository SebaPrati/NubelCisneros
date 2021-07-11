import React from 'react'
import UpperDashboard from './UpperDashboard'
import SearchBox from './SearchBox'

const Container = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <SearchBox />
                </div>
                <div className="row">
                    <UpperDashboard />
                </div>
            </div>
        </div>
    )
}

export default Container