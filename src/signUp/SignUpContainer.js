import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as actions from './actions';

import SignUpForm from './SignUpForm';

const mapStateToProps = state => ({
    signUpErrors: state.signUpReducer.signUpErrors,
});

const mapDispatchToProps = dispatch => ({
    signUpRequest: bindActionCreators(actions.signUpRequest, dispatch),
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(SignUpForm)
);
