import HttpUtility from './httpUtility';
import AuthService from '../authentication/authService';
import { updateToken } from '../authentication/utilities/tokenUtility';
import { UNAUTHORIZED } from './httpStatusCodes';

const withToken = config => ({
    ...config,
    headers: { Authorization: `Bearer ${AuthService.getToken()}` },
});

export default class AuthorizedHttpUtility {
    static get(url, config = {}) {
        return HttpUtility.get(url, withToken(config)).catch(error => {
            if (error.response.status === UNAUTHORIZED) {
                updateToken();
            }

            return HttpUtility.get(url, withToken(config));
        });
    }

    static post(url, config = {}, data = {}) {
        return HttpUtility.post(url, data, withToken(config)).catch(error => {
            if (error.response.status === 401) {
                updateToken();
            }

            return HttpUtility.post(url, data, withToken(config));
        });
    }

    static put(url, config = {}, data = {}) {
        return HttpUtility.put(url, data, withToken(config)).catch(error => {
            if (error.response.status === UNAUTHORIZED) {
                updateToken();
            }

            return HttpUtility.get(url, withToken(config));
        });
    }

    static delete(url, config = {}) {
        return HttpUtility.delete(url, withToken(config)).catch(error => {
            if (error.response.status === 401) {
                updateToken();
            }

            return HttpUtility.get(url, withToken(config));
        });
    }
}
