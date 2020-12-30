import React, { useState } from 'react'
import ReactMapGl, { Marker } from "react-map-gl";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createMarker } from '../../store/actions/mapActions';

function Map(state) {

    var lat;
    var lon;
    navigator.geolocation.getCurrentPosition(function (position) {
        /* console.log("Latitude ist :", position.coords.latitude);
        console.log("Longitude ist :", position.coords.longitude); */
        lat = position.coords.latitude;
        lon = position.coords.longitude;
    });

    const [viewport, setViewport] = React.useState({
        //Standartsicht Ffm
        latitude: 50.110644,
        longitude: 8.682092,
        width: "100vw",
        height: "90vh",
        zoom: 8,
    });

    // console.log(state)
    const geoData = state.geoData;



    return (
        <>
            <div className="Map">
                <ReactMapGl
                    {...viewport}
                    //Token aus '.env.local' Datei
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    //Syle
                    mapStyle="mapbox://styles/rayond333/ckjboyb7l0w3619vwr8fx5bi7"
                    //Für Zoom und Bewegen
                    onViewportChange={(viewport) => setViewport(viewport)}
                >
                    {geoData && geoData.map(geoData => {
                        return (
                            <Marker latitude={geoData.latitude} longitude={geoData.longitude} key={geoData.id}>
                                <button className="marker-btn">
                                    <img src="/beehive.svg" alt="Beehive Icon" />
                                </button>
                            </Marker>
                        )
                    })}

                </ReactMapGl>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        geoData: state.firestore.ordered.Geo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createMarker: (geoData) => dispatch(createMarker(geoData))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'Geo' }
    ])
)(Map)
