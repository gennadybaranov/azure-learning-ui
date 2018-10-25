import {
    RECEIVED_PAGE,
    SEARCHING_FILTER_ENTERED,
    LOADING_FAILED,
    TOGGLED_SORTING_ORDER,
} from './actions';
import { ASC, USERS_PER_PAGE } from './constants';

const initialState = {
    users: [],
    usersCount: 0,
    currentPageIndex: 0,
    searchingFilter: '',
    sortingOrder: ASC,
    usersPerPage: USERS_PER_PAGE,
    errors: [],
};

const userListReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_PAGE: {
            const { users, currentPageIndex, usersCount } = action.payload;

            return {
                ...state,
                users,
                currentPageIndex,
                usersCount,
                errors: [],
            };
        }
        case SEARCHING_FILTER_ENTERED: {
            return {
                ...state,
                searchingFilter: action.payload,
            };
        }
        case TOGGLED_SORTING_ORDER: {
            return {
                ...state,
                sortingOrder: action.payload,
            };
        }
        case LOADING_FAILED: {
            return {
                ...state,
                errors: action.payload,
            };
        }
        default:
            return state;
    }
};

export default userListReducer;
