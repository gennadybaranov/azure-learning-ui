import { SIGN_UP_FAILED, SIGN_UP_SUCCESS } from './actions';

const initialState = {
    signUpErrors: {
        errors: [],
    },
};

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_SUCCESS: {
            return {
                ...state,
                signUpErrors: action.payload,
            };
        }
        case SIGN_UP_FAILED: {
            return {
                ...state,
                signUpErrors: action.payload,
            };
        }
        default:
            return state;
    }
};

export default signUpReducer;
