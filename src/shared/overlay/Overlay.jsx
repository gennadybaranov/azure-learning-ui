import React from 'react';
import Loadable from 'react-loading-overlay';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withLocale } from '../localization/LocalizationContext';

import styles from './Overlay.scss';

const mapStateToProps = state => ({
    isActive: state.overlaySpinnerReducer.isActive,
});

const Overlay = ({ isActive, children, localeStrings }) => (
    <Loadable
        className={styles.overlay}
        active={isActive}
        spinner
        text={localeStrings.waiting}
    >
        {children}
    </Loadable>
);

Overlay.propTypes = {
    localeStrings: PropTypes.shape().isRequired,
    isActive: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
};

export default withLocale(connect(mapStateToProps)(Overlay));
