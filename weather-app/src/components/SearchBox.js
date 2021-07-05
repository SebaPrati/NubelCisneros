import React from 'react'


const SearchBox = () => {
    return (
        <div>
            <div className="col-md-3 searcharea">
                <h2 className="text-secondary">Search for a city:</h2>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" id="searchinput" 
// @ts-ignore
                    type="search" aria-label="Search"/>
                    <div className ="input-group-append">
                    <button className ="btn btn-primary" id="searchbtn" type ="submit">
                    <i className ="material-icons">search</i>
                    </button>
                    </div>
                </div>
                <div className="mt-5" id="prevSearches">
                </div>
            </div>
        </div>
    )
}

export default SearchBox
