import React from 'react';
import PropTypes from 'prop-types';

import { Tab, Row, Col, NavItem, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Surveys from '../surveys/Surveys';
import Users from '../users/UsersContainer';
import Home from '../home/Home';
import authService from '../shared/authentication/authService';
import pills from './pills/pills';
import { withLocale } from '../shared/localization/LocalizationContext';
import { SURVEYS, USER_LIST, HOME_CONTENT } from '../shared/routes';

import styles from './Content.scss';

const Content = ({ location, localeStrings }) => (
    <div className={styles.content}>
        <Tab.Container id="content" defaultActiveKey={location.pathname}>
            <Row className={styles.row}>
                <Col className={styles.sidebar} sm={2}>
                    <Nav bsStyle="pills" stacked>
                        {pills.map(
                            pill =>
                                pill.grantedRoles.some(r =>
                                    authService.getRole().includes(r)
                                ) && (
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
                </Col>
                <Col className={styles['view-data']} sm={9}>
                    <Tab.Content animation>
                        <Tab.Pane eventKey={SURVEYS.path}>
                            <Surveys />
                        </Tab.Pane>
                        <Tab.Pane eventKey={USER_LIST.path}>
                            <Users />
                        </Tab.Pane>
                        <Tab.Pane eventKey={HOME_CONTENT.path}>
                            <Home />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    </div>
);

Content.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
    localeStrings: PropTypes.shape().isRequired,
};

export default withRouter(withLocale(Content));
