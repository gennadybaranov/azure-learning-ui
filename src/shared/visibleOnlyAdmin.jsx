import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';

import { ADMIN_ROLE } from './authentication/roles';
import authService from './authentication/authService';

const visibleOnlyAnonymous = connectedAuthWrapper({
    authenticatedSelector: () => authService.getRoles().includes(ADMIN_ROLE),
});

export default visibleOnlyAnonymous;
