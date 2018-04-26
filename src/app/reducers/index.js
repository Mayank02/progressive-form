import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../utils/action-types';

const message = (state = {}, action) => {
    switch (action.type) {
        case types.SET_MESSAGE:
            return {
                ...state,
                info: action.payload
            };
        case types.RESET_MESSAGE:
            return {
                ...state,
                info: null
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    message,
    routing
});

export default rootReducer;
