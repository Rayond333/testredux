import React, { useState } from 'react'
import ReactMapGl, { Marker } from "react-map-gl";
import './map.css';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createMarker } from '../../store/actions/mapActions';
import { useDispatchMap } from "./mapHook";
import { Markers } from "./markers";

function Map(state) {

    const mapDispatch = useDispatchMap();
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
                    mapStyle="mapbox://styles/rayond333/ckjit47x0510119qji1of3f3w"
                    //onClick Event, um Marker auf Karte hinzuzufügen
                    onClick={x => { x.srcEvent.which === 1 && mapDispatch({ type: "ADD_MARKER", payload: { marker: x.lngLat } }) }}
                    //Für Zoom und Bewegen
                    onViewportChange={(viewport) => setViewport(viewport)}

                >
                    <Marker longitude={8.6867968} latitude={50.085888} >
                        <button className="marker-btn">
                            {/* <img src=" https://img.icons8.com/color/48/000000/marker.png" /> */}
                            <img src="/beehive.svg" alt="Beehive Icon" />
                        </button>
                    </Marker>
                    {/* <button className="add-btn">Add Bienenhaus</button> */}
                    {/* Hier werden die gespeicherten Marker aus Firebase gesetzt */}
                    {geoData && geoData.map(geoData => {
                        return (
                            <Marker latitude={geoData.latitude} longitude={geoData.longitude} key={geoData.id}>
                                <button className="marker-btn">
                                    {/* <img src=" https://img.icons8.com/color/48/000000/marker.png" /> */}
                                    <img src="/beehive.svg" alt="Beehive Icon" />
                                </button>
                            </Marker>
                        )
                    })}
                    <Markers />
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
