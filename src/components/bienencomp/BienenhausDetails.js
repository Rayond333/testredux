import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const BienenhausDetails = ({bienenhausDetails}) => {
    // const { bienenhausDetails } = props;
    // console.log(this.props);
    
    return (
        <div className="card z-depth-0 bienenhaus-details">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">Name: {/* {bienenhausDetails.name} */}</span>
                <p>Ort: {/* {bienenhausDetails.location} */}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
/*     console.log(ownProps);
    const id = ownProps.match.params.id;
    const bienenhaeuser = state.firestore.data.Bienenhäuser;
    const bienenhaus = bienenhaeuser ? bienenhaeuser[id] : null
    console.log(bienenhaus)
    return {
        bienenhaus: bienenhaeuser
    }
     */
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'Bienenhäuser' }
    ])
)(BienenhausDetails)

/* export default BienenhausDetails */
