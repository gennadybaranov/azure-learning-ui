import { WEB_API_SIGN_UP } from '../shared/apiRoutes';
import HttpUtility from '../shared/utilities/httpUtility';

export const signUp = userData =>
    HttpUtility.post(WEB_API_SIGN_UP, {}, userData);
