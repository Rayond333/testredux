import React from 'react'

const stockkarte = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section stockkarte">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Title - {id}</span>
                    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Raimund</div>
                    <div>2nd September</div>
                </div>
            </div>
        </div>
    )
}

export default stockkarte