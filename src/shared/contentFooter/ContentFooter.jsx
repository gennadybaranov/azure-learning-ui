import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';

import { withLocale } from '../localization/LocalizationContext';

import styles from './ContentFooter.scss';

const ContentFooter = props => {
    const {
        localeStrings,
        valueKey,
        valueCount,
        canPageLeft,
        canPageRight,
        pageToFirst,
        pageToLast,
        pageLeft,
        pageRight,
    } = props;

    return (
        <div className={styles['content-footer']}>
            <div className={styles['content-footer__counter']}>
                {`${localeStrings.totalAmountOf} ${localeStrings[valueKey]}${
                    localeStrings.colon
                } ${valueCount}`}
            </div>
            <ButtonGroup>
                <Button disabled={!canPageLeft} onClick={() => pageToFirst()}>
                    {'<<'}
                </Button>
                <Button disabled={!canPageLeft} onClick={() => pageLeft()}>
                    {'<'}
                </Button>
                <Button disabled={!canPageRight} onClick={() => pageRight()}>
                    {'>'}
                </Button>
                <Button disabled={!canPageRight} onClick={() => pageToLast()}>
                    {'>>'}
                </Button>
            </ButtonGroup>
        </div>
    );
};

ContentFooter.propTypes = {
    localeStrings: PropTypes.shape().isRequired,
    valueKey: PropTypes.string.isRequired,
    valueCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    canPageLeft: PropTypes.bool.isRequired,
    canPageRight: PropTypes.bool.isRequired,
    pageToFirst: PropTypes.func.isRequired,
    pageToLast: PropTypes.func.isRequired,
    pageLeft: PropTypes.func.isRequired,
    pageRight: PropTypes.func.isRequired,
};

export default withLocale(ContentFooter);
