import React from 'react'
import UpperDashboard from './UpperDashboard'

const SearchBox = () => {
    return (
        <div>
            <div className="container fluid">
                <div className="row">
                    <div className="col-md-3 border">
                        <h2 className="text-secondary">Search for a city:</h2>
                        <div className="input-group mb-4">
                            <input type="text" className="form-control" id="searchinput"
                                // @ts-ignore 
                                // eslint-disable-next-line
                                type="search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-primary" id="searchbtn" type="submit">
                                    <i className="material-icons">search</i>
                                </button>
                                <hr />

                            </div>
                        </div>
                        <div className="mt-5" id="prevSearches">
                            <label>Montevideo</label>
                            <hr />
                            <label>label 01</label>
                            <hr />
                            <label>label 01</label>
                            <hr />
                            <label>label 01</label>
                            <hr />
                            <label>label 01</label>
                            <hr />
                            <label>label 01</label>
                            <hr />
                            <label>label 01</label>
                            <hr />
                            <label>label 01</label>
                            <hr />
                        </div>
                    </div>
                    <UpperDashboard />
                </div>
            </div>
        </div>
    )
}

export default SearchBox
