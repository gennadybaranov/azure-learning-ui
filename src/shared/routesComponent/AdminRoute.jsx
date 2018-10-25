import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { HOME } from '../routes';
import authService from '../authentication/authService';
import { ADMIN_ROLE } from '../authentication/roles';

export const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            authService.getRoles().includes(ADMIN_ROLE) ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: HOME.path,
                    }}
                />
            )
        }
    />
);

AdminRoute.propTypes = {
    component: PropTypes.func.isRequired,
};
