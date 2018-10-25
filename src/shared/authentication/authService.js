import jwt from 'jsonwebtoken';
import { TOKEN, REFRESH_TOKEN } from './storageConstants';
import { ROLE, DISPLAY_NAME } from './contractUserDecodeConstants';

export default class authService {
    static getRoles() {
        if (!this.isAuthenticated()) {
            return '';
        }
        const roles = this.getUser()[ROLE];
        return roles;
    }

    static getName() {
        if (!this.isAuthenticated()) {
            return '';
        }
        const name = this.getUser()[DISPLAY_NAME];

        return name;
    }

    static isAuthenticated() {
        return this.getToken() !== null && !(this.getToken() === 'null');
    }

    static getToken() {
        return localStorage.getItem(TOKEN);
    }

    static getRefreshToken() {
        return localStorage.getItem(REFRESH_TOKEN);
    }

    static setToken(jwtToken) {
        localStorage.setItem(TOKEN, jwtToken);
    }

    static setRefreshToken(refreshToken) {
        localStorage.setItem(REFRESH_TOKEN, refreshToken);
    }

    static getUser() {
        const user = jwt.decode(this.getToken());

        return user;
    }
}
