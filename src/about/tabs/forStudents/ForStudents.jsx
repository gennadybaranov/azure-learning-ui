import React from 'react';
import PropTypes from 'prop-types';

import Item from '../shared/item/Item';
import items from './items';
import image11 from './images/branches1_550x60.png';
import image12 from './images/branches2_518x71.png';
import { withLocale } from '../../../shared/localization/LocalizationContext';

import sharedStyles from '../shared/sharedStyles.scss';

const ForStudents = ({ localeStrings }) => (
    <div className={sharedStyles['about-tab']}>
        <p className={sharedStyles['about-tab__paragraph']}>
            {`${localeStrings.studentsLabDesription}${localeStrings.colon}`}
        </p>
        <img alt="" src={image11} />
        <img alt="" src={image12} />
        <div className={sharedStyles['about-tab__block']}>
            <p className={sharedStyles['about-tab__paragraph']}>
                {`${localeStrings.labAdvantages}${localeStrings.colon}`}
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
    </div>
);

ForStudents.propTypes = {
    localeStrings: PropTypes.shape().isRequired,
};

export default withLocale(ForStudents);
