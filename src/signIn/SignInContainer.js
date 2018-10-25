import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as actions from './actions';

import SignInForm from './SignInForm';

const mapStateToProps = state => ({
    signInErrors: state.signInReducer.signInErrors,
    isActive: state.overlaySpinnerReducer.isActive,
});

const mapDispatchToProps = dispatch => ({
    signInRequest: bindActionCreators(actions.signInRequest, dispatch),
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(SignInForm)
);
