import qs from 'qs';

import { WEB_API_SIGN_IN } from '../shared/apiRoutes';
import HttpUtility from '../shared/utilities/httpUtility';

export const signIn = userData =>
    HttpUtility.post(
        WEB_API_SIGN_IN,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        },
        qs.stringify(userData)
    );

