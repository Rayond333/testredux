import React, { Component } from 'react'
import History from './History';
import Blaa from '../bienencomp/test';
import { connect } from 'react-redux';
import OverviewBienenhaus from '../bienencomp/overviewBienenhaus';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';



class Dashboard extends Component {
    render() {

        const { bienenhausDetails } = this.props
        console.log('BREAKPOINT Inhalt props in Dashboard')
        console.log()
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <h4><u>Meine Bienenhäuser</u></h4>
                        {/* <Link to={'/bienenhaus/' + bienenhausDetails.id} key={bienenhausDetails.id}> */}
                            <OverviewBienenhaus bienenhausDetails={bienenhausDetails} />
                        {/* </Link> */}
                    </div>
                    <div className="col s12 m5 offset-m1">
                        {/* <History /> */}
                        <Blaa bienenhausDetails={bienenhausDetails} />

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bienenhausDetails: state.firestore.ordered.Bienenhäuser
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'Bienenhäuser' }
    ])
)(Dashboard)