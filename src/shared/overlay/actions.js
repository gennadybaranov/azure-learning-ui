export const SHOW_OVERLAY = 'SHOW_OVERLAY';
export const HIDE_OVERLAY = 'HIDE_OVERLAY';

export const showOverlay = () => dispatch => {
    dispatch({
        type: SHOW_OVERLAY,
        payload: {},
    });
};

export const hideOverlay = () => dispatch => {
    dispatch({
        type: HIDE_OVERLAY,
        payload: {},
    });
};
