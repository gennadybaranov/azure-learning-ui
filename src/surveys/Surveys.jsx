import React from 'react';
import PropTypes from 'prop-types';

import { withLocale } from '../shared/localization/LocalizationContext';

const Surveys = ({ localeStrings }) => <div>{localeStrings.yourSurveys}</div>;

Surveys.propTypes = {
    localeStrings: PropTypes.shape().isRequired,
};

export default withLocale(Surveys);
