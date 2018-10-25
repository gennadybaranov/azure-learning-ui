import React from 'react';
import { Link } from 'react-router-dom';
import { SIGN_IN } from '../shared/routes';
import visibleOnlyAnonymous from '../shared/visibleOnlyAnonymous';
import { withLocale } from '../shared/localization/LocalizationContext';

const SignInLink = visibleOnlyAnonymous(({ localeStrings }) => (
    <li>
        <Link to={SIGN_IN.path}>{localeStrings.signIn}</Link>
    </li>
));

export default withLocale(SignInLink);
