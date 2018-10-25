import React from 'react';
import PropTypes from 'prop-types';

import { withLocale } from '../../../shared/localization/LocalizationContext';

import sharedStyles from '../shared/sharedStyles.scss';

const Vacancies = ({ localeStrings }) => (
    <div className={sharedStyles['about-tab']}>
        <h2 className={sharedStyles['about-tab__paragraph']}>
            {localeStrings.watchVacancies}
            <a
                href="https://www.itechart.com/careers/"
                className={sharedStyles['about-tab__link']}
                target="_blank"
                rel="noopener noreferrer"
            >
                {localeStrings.ourSite}
            </a>
        </h2>
    </div>
);

Vacancies.propTypes = {
    localeStrings: PropTypes.shape().isRequired,
};

export default withLocale(Vacancies);
