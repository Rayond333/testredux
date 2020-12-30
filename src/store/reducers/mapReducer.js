import * as actions from '../actions/actionTypes';

const mapReducer = (state = [], action) => {
    switch (action.type) {
        case actions.CREATE_MARKER:
            console.log('geo Punkte erhalten', action)
            return state;
        default:
            return state;
    }
}

export default mapReducer