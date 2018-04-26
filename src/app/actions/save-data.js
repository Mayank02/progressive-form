import 'whatwg-fetch';
import * as types from '../utils/action-types';
import constants from '../utils/constant';
import { submit } from '../utils/api';

export function saveData(data) {
    return (dispatch) => {
        submit(data).then(() => {
            dispatch({ type: types.SET_MESSAGE, payload: constants.SUCCESS_MESSAGE });
        }).catch(() => {
            dispatch({ type: types.SET_MESSAGE, payload: constants.ERROR_MESSAGE });
        });
    };
}
