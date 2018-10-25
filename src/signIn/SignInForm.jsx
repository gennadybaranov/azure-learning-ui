import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import {
    validateEmail,
    validatePassword,
} from '../shared/validations/userValidation';
import { SIGN_UP, USER_LIST, SURVEYS } from '../shared/routes';
import { withLocale } from '../shared/localization/LocalizationContext';
import authService from '../shared/authentication/authService';
import { ADMIN_ROLE } from '../shared/authentication/roles';
import { PASSWORD } from '../shared/authentication/grantTypeConstants';

import styles from './SignInForm.scss';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };

        this.errors = {
            email: '',
            password: '',
        };

        this.shouldShowValidation = false;
    }

    onEmailChange = event => {
        const { value } = event.target;
        const { password } = this.state;

        this.setErrorMessages('email', validateEmail, value);
        this.setState({
            password,
            email: value,
        });
    };

    onPasswordChange = event => {
        const { value } = event.target;
        const { email } = this.state;

        this.setErrorMessages('password', validatePassword, value);
        this.setState({
            email,
            password: value,
        });
    };

    get isFormValid() {
        return Object.values(this.errors).every(err => err === '');
    }

    setErrorMessages(fieldName, validationFunc, value) {
        const validationResult = validationFunc(value);

        const message = validationResult.isValid
            ? ''
            : validationResult.errorCodes[0];

        this.errors[fieldName] = message;
    }

    validateForm = () => {
        const { email, password } = this.state;

        this.setErrorMessages('email', validateEmail, email);
        this.setErrorMessages('password', validatePassword, password);
    };

    successRedirect = () => {
        const { history } = this.props;
        if (authService.getRoles().includes(ADMIN_ROLE)) {
            history.push(USER_LIST.path);
        } else {
            history.push(SURVEYS.path);
        }
    };

    signInRequest = () => {
        const { email, password } = this.state;

        const { signInRequest } = this.props;

        signInRequest(
            {
                UserName: email,
                password,
                grant_type: PASSWORD,
            },
            this.successRedirect
        );
    };

    handleSubmit = event => {
        event.preventDefault();

        this.shouldShowValidation = true;

        this.validateForm();

        if (this.isFormValid) {
            this.signInRequest();
        } else {
            this.forceUpdate();
        }
    };

    groupClassNames = field =>
        classNames('form-group', {
            'has-error': this.errors[field],
        });

    render() {
        const { email, password } = this.state;

        const emailGroupClass = this.groupClassNames('email');
        const passwordGroupClass = this.groupClassNames('password');

        const { localeStrings, signInErrors } = this.props;

        return (
            <form
                onSubmit={this.handleSubmit}
                className={`${styles['form-auth']} center-block`}
            >
                <h2 className={`${styles['form-auth__caption']}`}>
                    {localeStrings.signIn}
                </h2>
                <div className={emailGroupClass}>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.onEmailChange}
                        className="form-control"
                        placeholder={localeStrings.email}
                    />
                    {this.shouldShowValidation && (
                        <div
                            className={`${styles['warning-block']} ${
                                styles['form-auth__warning-block']
                            } help-block`}
                        >
                            {localeStrings[this.errors.email]}
                        </div>
                    )}
                </div>
                <div className={passwordGroupClass}>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.onPasswordChange}
                        className="form-control"
                        placeholder="Password"
                    />
                    {this.shouldShowValidation && (
                        <div
                            className={`${styles['warning-block']} ${
                                styles['form-auth__warning-block']
                            } help-block`}
                        >
                            {localeStrings[this.errors.password]}
                        </div>
                    )}
                </div>
                {this.shouldShowValidation && (
                    <div
                        className={`${styles['warning-block']} ${
                            styles['form-auth__warning-block']
                        } help-block`}
                    >
                        <ul className={`${styles['form-auth__error-list']}`}>
                            {<li>{localeStrings[signInErrors.errors]}</li>}
                            {<li>{localeStrings[signInErrors.error]}</li>}
                        </ul>
                    </div>
                )}
                <button type="button" className="btn btn-link">
                    {localeStrings.forgotPassword}
                </button>
                <button type="button" className="btn btn-link pull-right ">
                    <Link to={SIGN_UP.path}>{localeStrings.signUp}</Link>
                </button>
                <button type="submit" className="btn btn-default center-block">
                    {localeStrings.submit}
                </button>
            </form>
        );
    }
}

SignInForm.propTypes = {
    localeStrings: PropTypes.shape().isRequired,
    history: ReactRouterPropTypes.history.isRequired,
    signInErrors: PropTypes.shape({
        errors: PropTypes.array,
    }).isRequired,
    signInRequest: PropTypes.func.isRequired,
};

export default withLocale(SignInForm);
