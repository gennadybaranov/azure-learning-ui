import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { HOME, ABOUT } from '../shared/routes';
import LanguageSelector from './languageSelector/LanguageSelector';
import { withLocale } from '../shared/localization/LocalizationContext';
import authService from '../shared/authentication/authService';
import SignInLink from './SignInLink';
import logo from './logo.png';
import AuthDropDown from './AuthDropDown';

import styles from './Header.scss';

const Header = ({ localeStrings }) => (
    <header className={styles.header}>
        <div className="navbar-brand">
            <Link to={HOME.path}>
                <img src={logo} alt="LOGO" className="header__logo" />
            </Link>
        </div>
        <ul className={`navbar-nav nav ${styles.header__links}`}>
            <li>
                <Link to={ABOUT.path}>{localeStrings.aboutCompany}</Link>
            </li>
            <AuthDropDown name={authService.getName()} />
            <SignInLink />
            <li>
                <LanguageSelector />
            </li>
        </ul>
    </header>
);

Header.propTypes = {
    localeStrings: PropTypes.shape().isRequired,
};

export default withLocale(Header);
