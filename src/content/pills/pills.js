import { SURVEYS, USER_LIST } from '../../shared/routes';
import { ADMIN_ROLE, USER_ROLE } from '../../shared/authentication/roles';

export default [
    {
        title: SURVEYS.title,
        href: SURVEYS.path,
        grantedRoles: [ADMIN_ROLE, USER_ROLE],
    },
    {
        title: USER_LIST.title,
        href: USER_LIST.path,
        grantedRoles: [ADMIN_ROLE],
    },
];
