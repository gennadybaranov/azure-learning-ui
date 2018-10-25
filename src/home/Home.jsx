import React from 'react';
import PropTypes from 'prop-types';

import { withLocale } from '../shared/localization/LocalizationContext';

const Home = ({ localeStrings }) => <div>{localeStrings.welcome}</div>;

Home.propTypes = {
    localeStrings: PropTypes.shape().isRequired,
};

export default withLocale(Home);
