import React from 'react';
import PropTypes from 'prop-types';

import { withLocale } from '../localization/LocalizationContext';

import styles from './Search.scss';

const Search = ({ onChange, localeStrings }) => (
    <div className={styles.search}>
        <input
            className="form-control"
            type="search"
            placeholder={localeStrings.search}
            onChange={event => onChange(event.target.value)}
        />
    </div>
);

Search.propTypes = {
    onChange: PropTypes.func.isRequired,
    localeStrings: PropTypes.shape().isRequired,
};

export default withLocale(Search);
