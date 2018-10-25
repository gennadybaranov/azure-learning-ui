import axios from 'axios';

export default class HttpUtility {
    static get(url, config = {}) {
        return axios.get(url, config);
    }

    static post(url, header = {}, data = {}) {
        const config = { headers: header };

        return axios.post(url, data, config);
    }

    static put(url, header = {}, data = {}) {
        const config = { headers: header };

        return axios.put(url, data, config);
    }

    static delete(url, header = {}) {
        const config = { headers: header };

        return axios.delete(url, config);
    }
}
