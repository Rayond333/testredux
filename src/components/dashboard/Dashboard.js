import React,  { Component } from 'react'
import History from './History';
import { connect } from 'react-redux';
import OverviewBienenhaus from '../bienencomp/overviewBienenhaus';

class Dashboard extends Component {
    render() {
        
        const { bienenhausDetails } = this.props
        console.log('BREAKPOINT Inhalt props in Dashboard')
        console.log(bienenhausDetails)
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <OverviewBienenhaus bienenhausDetails={bienenhausDetails} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <History />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        bienenhausDetails: state.bienenhaus.bienenhaeuser
    }
}

export default connect(mapStateToProps)(Dashboard)