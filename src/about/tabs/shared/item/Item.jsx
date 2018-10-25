import React from 'react';
import PropTypes from 'prop-types';

import styles from './Item.scss';

const Item = props => {
    const { imagePath, text } = props;

    return (
        <div className={styles.item}>
            <img alt="" src={imagePath} />
            <p className={styles.item__text}>{text}</p>
        </div>
    );
};

Item.propTypes = {
    imagePath: PropTypes.string.isRequired,
    text: PropTypes.string,
}.isRequired;

export default Item;
