import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import languageCodes from '../../shared/localization/languageCodes';
import { LocalizationConsumer } from '../../shared/localization/LocalizationContext';

import styles from './LanguageSelector.scss';

const LanguageSelector = () => (
    <LocalizationConsumer>
        {({ localeStrings, onLanguageSelect }) => (
            <div className={styles['language-selector']}>
                <DropdownButton
                    bsSize="small"
                    title={localeStrings.language}
                    pullRight
                    id="split-button-dropup-pull-right"
                >
                    <MenuItem
                        onClick={() => onLanguageSelect(languageCodes.EN)}
                    >
                        {localeStrings.en}
                    </MenuItem>
                    <MenuItem
                        onClick={() => onLanguageSelect(languageCodes.RU)}
                    >
                        {localeStrings.ru}
                    </MenuItem>
                </DropdownButton>
            </div>
        )}
    </LocalizationConsumer>
);

export default LanguageSelector;
