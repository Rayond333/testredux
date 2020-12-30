import React from 'react'
import BienenhausDetails from './BienenhausDetails';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

const OverviewBienenhaus = ({ bienenhausDetails }) => {
    console.log('BREAKPOINT Daten, die in bienenhausDetails ankommen von Dashboard Props')
    console.log(bienenhausDetails)
    return (
        <div className="project-list section">
            { bienenhausDetails && bienenhausDetails.map(bienenhaus => {
                return (
                    <Link to={'/bienenhaus/' + bienenhaus.id} key={bienenhaus.id}>
                        <BienenhausDetails bienenhaus={bienenhaus}  />
                    </Link>
                )
            })}
        </div>
    )
}

export default OverviewBienenhaus