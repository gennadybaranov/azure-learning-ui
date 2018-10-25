import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import authService from '../authentication/authService';

export const RedirectedRoute = ({ component: Component, redirectedPath }) => (
    <Route
        render={props =>
            authService.isAuthenticated() ? (
                <Redirect
                    to={{
                        pathname: redirectedPath,
                    }}
                />
            ) : (
                <Component {...props} />
            )
        }
    />
);

RedirectedRoute.propTypes = {
    component: PropTypes.func.isRequired,
    redirectedPath: PropTypes.string.isRequired,
};
