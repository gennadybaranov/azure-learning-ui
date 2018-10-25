import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions';
import Users from './Users';
import { withLocale } from '../shared/localization/LocalizationContext';

const mapStateToProps = state => ({
    users: state.userListReducer.users,
    usersCount: state.userListReducer.usersCount,
    currentPageIndex: state.userListReducer.currentPageIndex,
    searchingFilter: state.userListReducer.searchingFilter,
    shouldSortDesc: state.userListReducer.shouldSortDesc,
    usersPerPage: state.userListReducer.usersPerPage,
    sortingOrder: state.userListReducer.sortingOrder,
    errors: state.userListReducer.errors,
});

const mapDispatchToProps = dispatch => ({
    getUsers: bindActionCreators(actions.getUsersRequest, dispatch),
    searchUser: bindActionCreators(actions.searchUser, dispatch),
    toggleSortingOrder: bindActionCreators(
        actions.toggleSortingOrder,
        dispatch
    ),
});

export default withLocale(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Users)
);
