import { signUp } from './api';
import { CONNECTION_FAILED } from '../shared/validations/constants';
import { showOverlay, hideOverlay } from '../shared/overlay/actions';

export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';

export const signUpSuccess = () => dispatch => {
    dispatch({
        type: SIGN_UP_SUCCESS,
        payload: {
            errors: [],
        },
    });
};

export const signUpFailed = errors => dispatch => {
    dispatch({
        type: SIGN_UP_FAILED,
        payload: errors,
    });
};

export const signUpRequest = (userData, successRedirect) => dispatch => {
    dispatch(showOverlay());
    signUp(userData)
        .then(() => {
            dispatch(signUpSuccess());
            successRedirect();
        })
        .catch(error => {
            if (error.response) {
                dispatch(signUpFailed(error.response.data));
            } else {
                dispatch(signUpFailed({ errors: [CONNECTION_FAILED] }));
            }
        })
        .finally(() => {
            dispatch(hideOverlay());
        });
};
