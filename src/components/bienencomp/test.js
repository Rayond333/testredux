import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const blaa = ({ bienenhausDetails }) => {
    console.log(bienenhausDetails);
    return (
        <div className="card z-depth-0 bienenhaus-details">
            <div className="card-content grey-text text-darken-3">
                {/* <span className="card-title">{bienenhausDetails.name}</span>
                <p>{bienenhausDetails.location}</p> */}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    /* console.log(state);
    const id = 1;
    const bienenhaeuser = state.firestore.data.Bienenhäuser;
    const bienenhaus = bienenhaeuser ? bienenhaeuser[id] : null
    return {
        bienenhaus: bienenhaus
    } */
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'Bienenhäuser' }
    ])
)(blaa)
