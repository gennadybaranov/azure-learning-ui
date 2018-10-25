import Config from '../config/config';

const BASE_URL = Config.get('ApiConfig.BaseUrl')

export const WEB_API_SIGN_UP = `${BASE_URL}/api/v1/account`;
export const WEB_API_SIGN_IN = `${BASE_URL}/token`
export const WEB_API_REFRESH_TOKEN = `${BASE_URL}/token`
export const WEB_API_USERS = `${BASE_URL}/api/v1/userlist`;

