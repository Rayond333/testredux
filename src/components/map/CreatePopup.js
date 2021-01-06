import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bienenhausAnlegen } from '../../store/actions/bienenhausActions';

var x;

/* navigator.geolocation.getCurrentPosition(function (position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
}); */

// HIER STEHEN GEBLIEBEN


function position() {
    console.log("du bist drin, schnegge")
    x = document.getElementById("position");
    console.log(x)

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

}

function showPosition(position) {
    console.log(position)
    
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}


class createPopup extends Component {
    state = {
        name: '',
        latitude: 0.0,
        longitude: 0.0
    }

    /*     location = (e) => {
            e.preventDefault();
      
            console.log(lat, lon)
        } */

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); // Um ein Pagereload zu verhindern
        console.log('BREAKPOINT createPopup props')
        console.log(this.props)
        console.log('BREAKPOINT createPopup state')
        console.log(this.state)
        this.props.bienenhausAnlegen(this.state)
    }



    render() {
        return (
            <div className="container">
                <form className="white">
                    <h5 className="grey-text text-darken-3">Neues Bienenhaus anlegen</h5>
                    <div className="input-field">
                        <label htmlFor="name">Name Bienenhaus</label>
                        <input type="text" id="name" onChange={this.handleChange} />
                    </div>
                </form>
                <div className="input-field">
                    <button className="btn pink ligthen-1 z-depth-0" onClick={position}>Aktuellen Standort nutzen</button>
                    <p id="position"></p>
                </div>

                <form onSubmit={this.handleSubmit} className="white">
                    <div className="input-field">
                        <button className="btn pink ligthen-1 z-depth-0">Anlegen</button>
                    </div>
                </form>

            </div>

        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        bienenhausAnlegen: (bienenhaus) => dispatch(bienenhausAnlegen(bienenhaus))
    }
}

export default connect(null, mapDispatchToProps)(createPopup)
