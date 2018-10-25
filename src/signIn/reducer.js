import { SIGN_IN_SUCCESS, SIGN_IN_FAILED } from './actions';

const initialState = {
    signInErrors: {
        errors: [],
    },
    user: {},
};

export default function signInReducer(state = initialState, action) {
    switch (action.type) {
        case SIGN_IN_SUCCESS: {
            return {
                ...state,
                signInErrors: action.payload,
            };
        }
        case SIGN_IN_FAILED: {
            return {
                ...state,
                signInErrors: action.payload,
            };
        }
        default:
            return state;
    }
}
