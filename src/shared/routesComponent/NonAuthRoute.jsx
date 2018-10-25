import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import authService from '../authentication/authService';
import { HOME } from '../routes';

export const NonAuthRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            authService.isAuthenticated() ? (
                <Redirect
                    to={{
                        pathname: HOME.path,
                    }}
                />
            ) : (
                <Component {...props} />
            )
        }
    />
);

NonAuthRoute.propTypes = {
    component: PropTypes.func.isRequired,
};
