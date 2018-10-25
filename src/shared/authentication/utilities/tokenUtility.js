import qs from 'qs';

import HttpUtility from '../../utilities/httpUtility';
import authService from '../authService';
import { WEB_API_REFRESH_TOKEN } from '../../apiRoutes';
import { REFRESH_TOKEN } from '../grantTypeConstants';

export const updateToken = () => {
    const refreshToken = authService.getRefreshToken();
    HttpUtility.post(
        WEB_API_REFRESH_TOKEN,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        },
        qs.stringify({
            grant_type: REFRESH_TOKEN,
            refresh_token: refreshToken,
        })
    ).then(response => {
        authService.setToken(response.data.access_token);
        authService.setRefreshToken(response.data.refresh_token);
    });
};
