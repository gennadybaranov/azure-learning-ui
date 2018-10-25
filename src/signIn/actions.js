import { signIn } from './api';
import { CONNECTION_FAILED } from '../shared/validations/constants';
import authService from '../shared/authentication/authService';
import { showOverlay, hideOverlay } from '../shared/overlay/actions';

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED';

export const signInSuccess = () => dispatch => {
    dispatch({
        type: SIGN_IN_SUCCESS,
        payload: {
            errors: [],
        },
    });
};

export const signInFailed = errors => dispatch => {
    dispatch({
        type: SIGN_IN_FAILED,
        payload: errors,
    });
};

export const signInRequest = (userData, successRedirect) => dispatch => {
    dispatch(showOverlay());
    signIn(userData)
        .then(response => {
            authService.setToken(response.data.access_token);
            authService.setRefreshToken(response.data.refresh_token);
            dispatch(signInSuccess());
            successRedirect();
        })
        .catch(error => {
            if (error.response) {
                dispatch(signInFailed(error.response.data));
            } else {
                dispatch(signInFailed({ error: [CONNECTION_FAILED] }));
            }
        })
        .finally(() => {
            dispatch(hideOverlay());
        });
};
