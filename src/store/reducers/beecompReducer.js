import * as actions from '../actions/actionTypes';

const beecompReducer = (state = [], action) => {
    switch (action.type) {
        case actions.CREATE_BIENENHAUS: 
            console.log('created bienenhaus', action)
            return state;
        case actions.CREATE_ERROR:
            console.log('create project error', action);
            return state;
        default:
            return state;
    }
}

export default beecompReducer