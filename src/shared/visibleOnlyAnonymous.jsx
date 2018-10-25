import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';

import authService from './authentication/authService';

const visibleOnlyAnonymous = connectedAuthWrapper({
    authenticatedSelector: () => !authService.isAuthenticated(),
});

export default visibleOnlyAnonymous;
