import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { SIGN_IN } from '../routes';
import authService from '../authentication/authService';

export const AuthRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            authService.isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: SIGN_IN.path,
                    }}
                />
            )
        }
    />
);

AuthRoute.propTypes = {
    component: PropTypes.func.isRequired,
};
