import React from 'react';
import PropTypes from 'prop-types';

import Item from '../shared/item/Item';
import items from './items';
import { withLocale } from '../../../shared/localization/LocalizationContext';

import sharedStyles from '../shared/sharedStyles.scss';

const OurAdvantages = ({ localeStrings }) => (
    <div className={sharedStyles['about-tab']}>
        <p className={sharedStyles['about-tab__paragraph']}>
            {`${localeStrings.reasonForJoin}${localeStrings.colon}`}
        </p>
        <div className={sharedStyles['about-tab__items-container']}>
            {items.map(item => (item.isVisible &&
                <Item imagePath={item.imagePath} text={localeStrings[item.textKey]} />
            ))}
        </div>
    </div>
);

OurAdvantages.propTypes = {
    localeStrings: PropTypes.shape().isRequired,
};

export default withLocale(OurAdvantages);
