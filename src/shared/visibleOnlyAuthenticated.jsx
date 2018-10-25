import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';

import authService from './authentication/authService';

const visibleOnlyAuthenticated = connectedAuthWrapper({
    authenticatedSelector: () => authService.isAuthenticated(),
});

export default visibleOnlyAuthenticated;
