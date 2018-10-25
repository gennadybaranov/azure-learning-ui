import _ from 'lodash';

import defaultConfig from './default';
import prodConfig from './production';

const configs = {
    default: defaultConfig,
    production: prodConfig,
};

export default class Config {
    static get(key) {
        const env = process.env.NODE_ENV;
        const config = {
            ...configs.default,
            ...(configs[env] || {}),
        };

        return _.get(config, key);
    }
}
