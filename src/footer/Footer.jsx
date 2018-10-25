import React from 'react';

import styles from './Footer.scss';

const Footer = () => (
    <footer className={styles.footer}>
        <div className="footer-copyright text-center">
            Copyright © {(new Date).getFullYear()} iTechArt
        </div>
    </footer>
);

export default Footer;
