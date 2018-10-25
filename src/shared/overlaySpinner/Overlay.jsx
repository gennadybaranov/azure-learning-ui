import React from 'react';
import { ClipLoader } from 'react-spinners';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './Overlay.scss';

const mapStateToProps = state => ({
    isActive: state.overlaySpinnerReducer.isActive,
});

const Overlay = ({ isActive, children }) => (
    <div className={styles.overlay}>
        <div className={styles.overlay__spinner}>
            <ClipLoader loading={isActive} color="black" />
        </div>
        <div
            className={
                isActive ? styles.overlay_active : styles.overlay_inactive
            }
        >
            {children}
        </div>
    </div>
);

Overlay.propTypes = {
    isActive: PropTypes.bool.isRequired,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default connect(mapStateToProps)(Overlay);
