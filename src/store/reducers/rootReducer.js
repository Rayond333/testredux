import authReducer from './authReducer';
import beecompReducer from './beecompReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    bienenhaus: beecompReducer
});

export default rootReducer