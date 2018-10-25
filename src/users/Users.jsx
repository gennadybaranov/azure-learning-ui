import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

import ContentFooter from '../shared/contentFooter/ContentFooter';
import UserControlPanel from './userControlPanel/UserControlPanel';
import Search from '../shared/search/Search';
import NameButton from './nameButton/NameButton';
import { DESC } from './constants';

import styles from './Users.scss';

class UserList extends React.Component {
    componentDidMount = () => {
        this.getPage(0);
    };

    getPage = index => {
        const {
            getUsers,
            sortingOrder,
            usersPerPage,
            searchingFilter,
        } = this.props;

        getUsers(index, sortingOrder, usersPerPage, searchingFilter);
    };

    pageToFirst = () => {
        this.getPage(0);
    };

    pageToLast = () => {
        const { usersCount, usersPerPage } = this.props;

        const lastPageIndex = Math.ceil(usersCount / usersPerPage) - 1;

        this.getPage(lastPageIndex);
    };

    pageLeft = () => {
        const { currentPageIndex } = this.props;

        this.getPage(currentPageIndex - 1);
    };

    pageRight = () => {
        const { currentPageIndex } = this.props;

        this.getPage(currentPageIndex + 1);
    };

    searchUsers = searchingFilter => {
        const { searchUser, sortingOrder, usersPerPage } = this.props;

        searchUser(searchingFilter, 0, sortingOrder, usersPerPage);
    };

    toggleSortingOrder = () => {
        const {
            toggleSortingOrder,
            sortingOrder,
            usersPerPage,
            searchingFilter,
        } = this.props;

        toggleSortingOrder(sortingOrder, usersPerPage, searchingFilter);
    };

    render() {
        const {
            users,
            localeStrings,
            currentPageIndex,
            usersCount,
            usersPerPage,
            sortingOrder,
            errors,
        } = this.props;

        const lastPageIndex = Math.ceil(usersCount / usersPerPage) - 1;

        return (
            <div className={styles['user-list']}>
                <div className={styles['user-list__header']}>
                    <h2 className={styles['user-list__caption']}>
                        {localeStrings.usersCapital}
                    </h2>
                    <Search onChange={value => this.searchUsers(value)} />
                </div>
                <table className={styles.table}>
                    <thead className={styles.table__header}>
                        <tr className={styles['table__header-row']}>
                            <th
                                className={`${styles['table__column-big']} ${
                                    styles.table__cell
                                }`}
                            >
                                <NameButton
                                    shouldSortDesc={sortingOrder === DESC}
                                    onClick={this.toggleSortingOrder}
                                />
                            </th>
                            <th
                                className={`${styles['table__column-tiny']} ${
                                    styles.table__cell
                                }`}
                            >
                                {localeStrings.userRole}
                            </th>
                            <th
                                className={`${styles['table__column-tiny']} ${
                                    styles.table__cell
                                }`}
                            >
                                {localeStrings.registeredTime}
                            </th>
                            <th
                                className={`${styles['table__column-small']} ${
                                    styles.table__cell
                                }`}
                            >
                                {localeStrings.surveysAmount}
                            </th>
                            <th
                                className={`${styles['table__column-small']} ${
                                    styles.table__cell
                                }`}
                            >
                                {localeStrings.actions}
                            </th>
                        </tr>
                    </thead>
                    <tbody className={styles.table__body}>
                        {users.map(item => (
                            <tr
                                key={item.id}
                                className={styles['table__body-row']}
                            >
                                {Object.keys(item).map(key => (
                                    <td
                                        className={styles.table__cell}
                                        key={key}
                                    >
                                        {item[key]}
                                    </td>
                                ))}
                                <td className={styles.table__cell}>
                                    <UserControlPanel />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <ContentFooter
                    localeStrings={localeStrings}
                    valueKey="users"
                    valueCount={usersCount}
                    canPageLeft={currentPageIndex > 0}
                    canPageRight={currentPageIndex < lastPageIndex}
                    pageToFirst={this.pageToFirst}
                    pageToLast={this.pageToLast}
                    pageLeft={this.pageLeft}
                    pageRight={this.pageRight}
                />
                {errors.map(item => (
                    <Alert key={item.id} bsStyle="warning">
                        {localeStrings[item]}
                    </Alert>
                ))}
            </div>
        );
    }
}

UserList.propTypes = {
    getUsers: PropTypes.func.isRequired,
    searchUser: PropTypes.func.isRequired,
    toggleSortingOrder: PropTypes.func.isRequired,
    searchingFilter: PropTypes.string.isRequired,
    sortingOrder: PropTypes.string.isRequired,
    usersPerPage: PropTypes.number.isRequired,
    currentPageIndex: PropTypes.number.isRequired,
    users: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            role: PropTypes.string.isRequired,
            registeredTime: PropTypes.string.isRequired,
            surveys: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
        })
    ).isRequired,
    localeStrings: PropTypes.shape().isRequired,
    usersCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UserList;
