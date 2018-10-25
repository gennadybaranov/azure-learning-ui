import React from 'react';
import PropTypes from 'prop-types';

import Item from '../shared/item/Item';
import items from './items';
import { withLocale } from '../../../shared/localization/LocalizationContext';

import sharedStyles from '../shared/sharedStyles.scss';

const Benefits = ({ localeStrings }) => (
    <div className={sharedStyles['about-tab']}>
        <p className={sharedStyles['about-tab__paragraph']}>
            {`${localeStrings.benefitsSystem}${localeStrings.colon}`}
        </p>
        <div className={sharedStyles['about-tab__items-container']}>
            {items.map(item => (
                <Item
                    key={item.textKey}
                    imagePath={item.imagePath}
                    text={localeStrings[item.textKey]}
                />
            ))}
        </div>
    </div>
);

Benefits.propTypes = {
    localeStrings: PropTypes.shape().isRequired,
};

export default withLocale(Benefits);
