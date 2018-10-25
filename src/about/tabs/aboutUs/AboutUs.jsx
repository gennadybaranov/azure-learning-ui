import React from 'react';
import PropTypes from 'prop-types';

import Item from '../shared/item/Item';
import technologiesItems from './technologiesItems';
import items from './branchesItems';
import { withLocale } from '../../../shared/localization/LocalizationContext';

import sharedStyles from '../shared/sharedStyles.scss';

const AboutUs = ({ localeStrings }) => (
    <div className={sharedStyles['about-tab']}>
        <div className={sharedStyles['about-tab__block']}>
            <p className={sharedStyles['about-tab__paragraph']}>
                {`${localeStrings.technologies}${localeStrings.colon}`}
            </p>
            <div className={sharedStyles['about-tab__items-container']}>
                {technologiesItems.map(item => (
                    <Item key={item.imagePath} imagePath={item.imagePath} />
                ))}
            </div>
        </div>
        <p className={sharedStyles['about-tab__paragraph']}>
            {`${localeStrings.developmentBranches}${localeStrings.colon}`}
        </p>
        <div className={sharedStyles['about-tab__items-container']}>
            {items.map(item => (
                <Item
                    key={item.textKey}
                    imagePath={item.imagePath}
                    text={localeStrings[item.textKey]}
                />
            ))};
        </div>
    </div>
);

AboutUs.propTypes = {
    localeStrings: PropTypes.shape().isRequired,
};

export default withLocale(AboutUs);
