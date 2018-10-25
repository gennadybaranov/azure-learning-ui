import React from 'react';
import PropTypes from 'prop-types';

import { withLocale } from '../../../shared/localization/LocalizationContext';

import styles from './Contacts.scss';
import sharedStyles from '../shared/sharedStyles.scss';

const Contacts = ({ localeStrings }) => (
    <div className={sharedStyles['about-tab']}>
        <p className={sharedStyles['about-tab__paragraph']}>
            {`${localeStrings.followSocialNetworks}${localeStrings.colon}`}
        </p>
        <div className={sharedStyles['about-tab__items-container']}>
            <a
                href="https://www.linkedin.com/company/itechart-group"
                className={styles['social-link']}
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa fa-linkedin" />
            </a>
            <a
                href="https://www.youtube.com/user/iTechArt"
                className={styles['social-link']}
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa fa-youtube" />
            </a>
            <a
                href="https://www.facebook.com/iTechArt.Group?fref=ts"
                className={styles['social-link']}
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa fa-facebook" />
            </a>
            <a
                href="https://www.instagram.com/itechart_official/"
                className={styles['social-link']}
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa fa-instagram" />
            </a>
            <a
                href="https://vk.com/itechart.group"
                className={styles['social-link']}
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa fa-vk" />
            </a>
        </div>
    </div>
);

Contacts.propTypes = {
    localeStrings: PropTypes.shape().isRequired,
};

export default withLocale(Contacts);
