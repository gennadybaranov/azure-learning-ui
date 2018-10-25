import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';

import AboutUs from './tabs/aboutUs/AboutUs';
import Benefits from './tabs/benefits/Benefits';
import Contacts from './tabs/contacts/Contacts';
import ForStudents from './tabs/forStudents/ForStudents';
import OurAdvantages from './tabs/ourAdnvantages/OurAdvantages';
import Studying from './tabs/studying/Studying';
import Vacancies from './tabs/vacancies/Vacancies';
import headerLogo from './images/header_logo.png';
import { withLocale } from '../shared/localization/LocalizationContext';

import styles from './About.scss';

const About = ({ localeStrings }) => (
    <div className={styles.about}>
        <div className={styles.about__header}>
            <div className={styles.about__caption}>:ITechArt</div>
            <img
                className={styles['about__header-logo']}
                src={headerLogo}
                alt="HEADER LOGO"
            />
        </div>
        <div className={styles.about__content}>
            <Tabs id="About" defaultActiveKey={1} animation={false}>
                <Tab eventKey={1} title={localeStrings.aboutUs}>
                    <AboutUs />
                </Tab>
                <Tab eventKey={2} title={localeStrings.studying}>
                    <Studying />
                </Tab>
                <Tab eventKey={3} title={localeStrings.benefits}>
                    <Benefits />
                </Tab>
                <Tab eventKey={4} title={localeStrings.forStudents}>
                    <ForStudents />
                </Tab>
                <Tab eventKey={5} title={localeStrings.ourAdvantages}>
                    <OurAdvantages />
                </Tab>
                <Tab eventKey={6} title={localeStrings.vacancies}>
                    <Vacancies />
                </Tab>
                <Tab eventKey={7} title={localeStrings.contacts}>
                    <Contacts />
                </Tab>
            </Tabs>
        </div>
    </div>
);

About.propTypes = {
    localeStrings: PropTypes.shape().isRequired,
};

export default withLocale(About);
