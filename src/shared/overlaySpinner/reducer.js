import { SHOW_OVERLAY, HIDE_OVERLAY } from './actions';

const initialState = {
    isActive: false,
};

export default function overlaySpinnerReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_OVERLAY: {
            return {
                ...state,
                isActive: true,
            };
        }
        case HIDE_OVERLAY:
            return {
                ...state,
                isActive: false,
            };
        default:
            return state;
    }
}
