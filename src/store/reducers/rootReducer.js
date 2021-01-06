import authReducer from './authReducer';
import beecompReducer from './beecompReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
// import mapReducer from './mapReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    bienenhaus: beecompReducer,
    // map: mapReducer,
    firestore: firestoreReducer
});

export default rootReducer