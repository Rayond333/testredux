import React from 'react'

const BienenhausDetails = ({bienenhausDetails}) => {
    return (
        <div className="card z-depth-0 bienenhaus-details">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{bienenhausDetails.name}</span>
                <p>Posted by Raimund</p>
                <p className="grey-text">20th December 2020</p>
            </div>
        </div>
    )
}

export default BienenhausDetails
