import * as actions from './actionTypes';

export const bienenhausAnlegen = (bienenhaus) => {
    

    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore(); // reference to the firestore configured in 'fbConfig'
        firestore.collection('Bienenhäuser').add({
            ...bienenhaus,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: actions.CREATE_BIENENHAUS, bienenhaus: bienenhaus });
        }).catch((err) => {
            dispatch({ type: actions.CREATE_ERROR, err });
        })

    }
};