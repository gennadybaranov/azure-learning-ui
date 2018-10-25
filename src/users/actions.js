import { getPageFromApi } from './api';
import { CONNECTION_FAILED } from '../shared/validations/constants';
import { showOverlay, hideOverlay } from '../shared/overlaySpinner/actions';
import { DESC, ASC } from './constants';

export const RECEIVED_PAGE = 'PAGED_LEFT';
export const LOADING_FAILED = 'LOADING_FAILED';
export const SEARCHING_FILTER_ENTERED = 'SEARCHING_FILTER_ENTERED';
export const TOGGLED_SORTING_ORDER = 'TOGGLED_SORTING_ORDER';

const loadingFailed = errors => dispatch => {
    const payload = errors.response
        ? errors.response.data
        : [CONNECTION_FAILED];
    dispatch({
        type: LOADING_FAILED,
        payload,
    });
};

export const getUsersRequest = (
    index,
    sortingOrder,
    usersPerPage,
    searchingFilter
) => dispatch => {
    dispatch(showOverlay());
    getPageFromApi(index, sortingOrder, usersPerPage, searchingFilter)
        .then(response => {
            const { usersCount, users } = response.data;
            dispatch({
                type: RECEIVED_PAGE,
                payload: {
                    users,
                    currentPageIndex: index,
                    usersCount,
                },
            });
        })
        .catch(errors => {
            dispatch(loadingFailed(errors));
        })
        .finally(() => dispatch(hideOverlay()));
};

export const searchUser = (
    searchingFilter,
    pageIndex,
    sortingOrder,
    usersPerPage
) => dispatch => {
    dispatch({
        type: SEARCHING_FILTER_ENTERED,
        payload: searchingFilter,
    });
    dispatch(
        getUsersRequest(pageIndex, sortingOrder, usersPerPage, searchingFilter)
    );
};

export const toggleSortingOrder = (
    currentSortingOrder,
    usersPerPage,
    searchingFilter
) => dispatch => {
    const sortingOrder = currentSortingOrder === ASC ? DESC : ASC;
    dispatch({
        type: TOGGLED_SORTING_ORDER,
        payload: sortingOrder,
    });
    dispatch(getUsersRequest(0, sortingOrder, usersPerPage, searchingFilter));
};
