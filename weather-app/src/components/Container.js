import React from 'react'
import UpperDashboard from './UpperDashboard'
import SearchBox from './SearchBox'

const Container = () => {
    return (
        <div>
            <div className="container fluid">
                <div className="row">
                    <div className="col-md-3 border">
                    <SearchBox />
                    </div>
                    <div className="col-md-9 border">
                        <UpperDashboard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container
