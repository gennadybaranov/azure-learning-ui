import { WEB_API_USERS } from '../shared/apiRoutes';
import HttpUtility from '../shared/utilities/authorizedHttpUtility';

export const getPageFromApi = (
    index,
    sortingOrder,
    usersPerPage,
    searchingFilter = ''
) =>
    HttpUtility.get(`${WEB_API_USERS}/`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: {
            index,
            sortingOrder,
            usersPerPage,
            searchingFilter,
        },
    });
