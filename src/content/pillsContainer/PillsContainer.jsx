import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { withLocale } from '../../shared/localization/LocalizationContext';
import visibleOnlyAuthenticated from '../../shared/visibleOnlyAuthenticated';
import pills from '../pills/pills';

import styles from '../Content.scss';

const PillsContainer = visibleOnlyAuthenticated(({ localeStrings }) => (
    <Nav bsStyle="pills" stacked>
        {pills.map(
            pill =>
                pill.isVisible && (
                    <NavItem
                        className={styles.sidebar__item}
                        eventKey={pill.href}
                        href={pill.href}
                        key={pill.title}
                    >
                        {localeStrings[pill.title]}
                    </NavItem>
                )
        )}
    </Nav>
));

PillsContainer.propTypes = {
    localeStrings: PropTypes.shape().isRequired,
};

export default withLocale(PillsContainer);
