import React from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { HOME } from '../shared/routes';
import authService from '../shared/authentication/authService';
import { withLocale } from '../shared/localization/LocalizationContext';
import visibleOnlyAuthenticated from '../shared/visibleOnlyAuthenticated';

function logOut() {
    authService.setToken(null);
    authService.setRefreshToken(null);
}

const AuthDropDown = visibleOnlyAuthenticated(({ name, localeStrings }) => (
    <NavDropdown id="dropdown" pullRight title={name}>
        <MenuItem href={HOME.path}>{localeStrings.home}</MenuItem>
        <MenuItem divider />
        <MenuItem onSelect={logOut} href={HOME.path}>
            {localeStrings.logOut}
        </MenuItem>
    </NavDropdown>
));

AuthDropDown.propTypes = {
    localeStrings: PropTypes.shape().isRequired,
    name: PropTypes.string.isRequired,
};

export default withLocale(AuthDropDown);
