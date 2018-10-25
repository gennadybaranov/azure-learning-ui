import React from 'react';
import PropTypes from 'prop-types';

import GlyphButton from '../../shared/glyphButtons/GlyphButton';
import { withLocale } from '../../shared/localization/LocalizationContext';

const NameButton = ({ onClick, localeStrings, shouldSortDesc }) => (
    <GlyphButton onClick={onClick}>
        {localeStrings.userName}
        {' '}
        {shouldSortDesc ? <i className="fa fa-caret-up" /> : <i className="fa fa-caret-down" />}
    </GlyphButton>
);

NameButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    localeStrings: PropTypes.shape().isRequired,
    shouldSortDesc: PropTypes.bool.isRequired,
};

export default withLocale(NameButton);
