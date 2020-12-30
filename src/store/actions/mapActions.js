import * as actions from './actionTypes';

export const createMarker = (geoData) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore(); // reference to the firestore configured in 'fbConfig'
        firestore.collection('Geo').add({
            ...geoData
        }).then (() => {
            dispatch({ type: actions.CREATE_MARKER, geoData: geoData});
        }).catch((err) => {
            dispatch({ type: actions.CREATE_ERROR, err });
        })
        
    }
};