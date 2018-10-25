import validator from 'validator';

import {
    NAME_REQUIRED,
    EMAIL_INVALID,
    PASSWORD_INVALID,
    PASSWORDS_NOT_EQUAL,
    PASSWORD_REGEX,
    EMAIL_REQUIRED,
    PASSWORD_REQUIRED,
    CONFIRM_PASSWORD_REQUIRED,
} from './constants';
import ValidationResult from './validationResult';

export const validateName = value => {
    const name = value;
    const errors = [];

    if (!name || name.length === 0) {
        errors.push(NAME_REQUIRED);
    }

    return new ValidationResult(errors);
};

export const validateEmail = value => {
    const email = value || '';
    const errors = [];

    if (!email || email.length === 0) {
        errors.push(EMAIL_REQUIRED);
    }

    if (!validator.isEmail(email)) {
        errors.push(EMAIL_INVALID);
    }

    return new ValidationResult(errors);
};

export const validatePassword = value => {
    const password = value;
    const errors = [];

    if (!password || password.length === 0) {
        errors.push(PASSWORD_REQUIRED);
    }

    const passwordPattern = new RegExp(PASSWORD_REGEX);

    if (!passwordPattern.test(password)) {
        errors.push(PASSWORD_INVALID);
    }

    return new ValidationResult(errors);
};

export const validateConfirmPassword = (confirmValue, value) => {
    const password = value;
    const confirmPassword = confirmValue;
    const errors = [];

    if (!confirmPassword || confirmPassword.length === 0) {
        errors.push(CONFIRM_PASSWORD_REQUIRED);
    }
    if (password !== confirmPassword) {
        errors.push(PASSWORDS_NOT_EQUAL);
    }

    return new ValidationResult(errors);
};
