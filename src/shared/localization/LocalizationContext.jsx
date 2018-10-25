import React from 'react';

import { getLocale } from './localization';

export const {
    Provider: LocalizationProvider,
    Consumer: LocalizationConsumer,
} = React.createContext({
    localeStrings: getLocale(),
    onLanguageSelect: () => {},
});

export const withLocale = Component => props => (
    <LocalizationConsumer>
        {({ localeStrings }) => (
            <Component {...props} localeStrings={localeStrings} />
        )}
    </LocalizationConsumer>
);
