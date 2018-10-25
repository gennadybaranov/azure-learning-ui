import { combineReducers } from 'redux';

import signUpReducer from '../signUp/reducer';
import signInReducer from '../signIn/reducer';
import overlaySpinnerReducer from './overlay/reducer';
import userListReducer from '../users/reducer';

export default combineReducers({
    signUpReducer,
    signInReducer,
    userListReducer,
    overlaySpinnerReducer,
});
