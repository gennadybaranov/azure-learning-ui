import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import {
    validateName,
    validateEmail,
    validatePassword,
    validateConfirmPassword,
} from '../shared/validations/userValidation';
import { SURVEYS } from '../shared/routes';
import { withLocale } from '../shared/localization/LocalizationContext';

import styles from './SignUpForm.scss';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        };

        this.errors = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            connection: '',
        };

        this.shouldShowValidation = false;
        this.isLoading = false;
    }

    onNameChange = event => {
        const { value } = event.target;
        const { email, password, confirmPassword } = this.state;

        this.setErrorMessages('name', validateName, value);
        this.setState({
            email,
            password,
            confirmPassword,
            name: value,
        });
    };

    onEmailChange = event => {
        const { value } = event.target;
        const { name, password, confirmPassword } = this.state;

        this.setErrorMessages('email', validateEmail, value);
        this.setState({
            name,
            password,
            confirmPassword,
            email: value,
        });
    };

    onPasswordChange = event => {
        const { value } = event.target;
        const { name, email, confirmPassword } = this.state;

        this.setErrorMessages('password', validatePassword, value);
        this.setState({
            name,
            email,
            confirmPassword,
            password: value,
        });
    };

    onConfirmPasswordChange = event => {
        const { value } = event.target;
        const { name, email, password } = this.state;

        this.setErrorMessages(
            'confirmPassword',
            validateConfirmPassword,
            value,
            password
        );
        this.setState({
            name,
            email,
            password,
            confirmPassword: value,
        });
    };

    get isFormValid() {
        this.errors.connection = '';
        return Object.values(this.errors).every(err => err === '');
    }

    setErrorMessages(fieldName, validationFunc, value1, value2) {
        const validationResult = validationFunc(value1, value2);

        const message = validationResult.isValid
            ? ''
            : validationResult.errorCodes[0];

        this.errors[fieldName] = message;
    }

    validateForm = () => {
        const { name, email, password, confirmPassword } = this.state;

        this.setErrorMessages('name', validateName, name);
        this.setErrorMessages('email', validateEmail, email);
        this.setErrorMessages('password', validatePassword, password);
        this.setErrorMessages(
            'confirmPassword',
            validateConfirmPassword,
            confirmPassword,
            password
        );
    };

    groupClassNames = field =>
        classNames('form-group', {
            'has-error': this.errors[field],
        });

    successRedirect = () => {
        const { history } = this.props;

        history.push(SURVEYS.path);
    };

    signUpRequest = () => {
        const { name, email, password } = this.state;

        const { signUpRequest } = this.props;

        signUpRequest(
            {
                displayName: name,
                userName: email,
                password,
            },
            this.successRedirect
        );
    };

    handleSubmit = event => {
        event.preventDefault();
        this.isLoading = true;

        this.shouldShowValidation = true;

        this.validateForm();

        if (this.isFormValid) {
            this.signUpRequest();
        } else {
            this.forceUpdate();
        }
    };

    render() {
        const { name, email, password, confirmPassword } = this.state;

        const nameGroupClass = this.groupClassNames('name');
        const emailGroupClass = this.groupClassNames('email');
        const passwordGroupClass = this.groupClassNames('password');
        const confirmGroupClass = this.groupClassNames('confirmPassword');

        const { signUpErrors, localeStrings } = this.props;
        return (
            <form
                onSubmit={this.handleSubmit}
                className={`${styles['form-auth']} center-block`}
            >
                <h2 className={`${styles['form-auth__caption']}`}>
                    {localeStrings.signUp}
                </h2>
                <div className={nameGroupClass}>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.onNameChange}
                        className="form-control"
                        placeholder={localeStrings.name}
                    />
                    {this.shouldShowValidation && (
                        <div
                            className={`${styles['warning-block']} ${
                                styles['form-auth__warning-block']
                            } help-block`}
                        >
                            {localeStrings[this.errors.name]}
                        </div>
                    )}
                </div>
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
                        placeholder={localeStrings.password}
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
                <div className={confirmGroupClass}>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.onConfirmPasswordChange}
                        className="form-control"
                        placeholder={localeStrings.confirmPassword}
                    />
                    {this.shouldShowValidation && (
                        <div
                            className={`${styles['warning-block']} ${
                                styles['form-auth__warning-block']
                            } help-block`}
                        >
                            {localeStrings[this.errors.confirmPassword]}
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
                            {signUpErrors.errors.map(error => (
                                <li key={error}>{localeStrings[error]}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <button type="submit" className="btn btn-default center-block">
                    {localeStrings.submit}
                </button>
            </form>
        );
    }
}

SignUpForm.propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    signUpErrors: PropTypes.shape({
        errors: PropTypes.array,
    }).isRequired,
    signUpRequest: PropTypes.func.isRequired,
    localeStrings: PropTypes.shape().isRequired,
};

export default withLocale(SignUpForm);
