import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    setupRequest: [],
    setupMobileRequest: ['mobileNumber'],
    setupSuccess: ['payload'],
    setupFailure: null,
    setupMobileFailure: ['error'],
    setupMobileSuccess: null,
    setupMobileReset: null,
    setupMobileCheckRequest: ['mobileNumber', 'code'],
    setupMobileCheckFailure: ['error'],
    setupMobileCheckSuccess: null,
    setupUserProfileRequest: ['firstName', 'lastName', 'image'],
    setupUserProfileFailure: ['error'],
    setupUserProfileSuccess: null,
    setupUserWalletRequest: ['pin'],
    setupUserWalletFailure: ['error'],
    setupUserWalletSuccess: null,
    setupEmailVerificationReSend: null,
    setupClear: null
});

export const SetupTypes = Types;
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    fetching: false,
    payload: {},
    error: '',
    step: 'unkown',
    require_setup: true,
    user: {},
    message_sent: false
});

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state ) =>
    state.merge({ fetching: true });

// successful api lookup
export const success = (state, action) => {
    const { payload } = action;
    return state.merge({
        fetching: false,
        error: '',
        payload,
        step: payload.setup_step,
        require_setup: payload.require_setup,
        user: payload.user,
        message_sent: false
    })
};

// Something went wrong somewhere.
export const failure = state =>
    state.merge({ fetching: false, error: 'Setup init failed' });

export const mobileRequest = (state, { data }) =>
    state.merge({ fetching: true, error: '', message_sent: false });

export const mobileCheckRequest = (state, { data }) =>
    state.merge({ fetching: true, error: '' });

export const mobileCheckFailure = (state, { error }) =>
    state.merge({ fetching: false, error: error });

export const mobileFailure = (state, { error }) => {
    return state.merge({ fetching: false, error: error, message_sent: false })
};

export const mobileReset = state => {
    return state.merge({ fetching: true, message_sent: false })
};

export const mobileSuccess = (state, { error }) => {
    return state.merge({ fetching: false, error: '', message_sent: true })
};

export const mobileCheckSuccess = (state, { error }) => {
    return state.merge({ fetching: false, error: '', message_sent: false })
};

export const userProfileRequest = (state, { data }) =>
    state.merge({ fetching: true, error: '' });

export const userProfileSuccess = (state, { error }) => {
    return state.merge({ fetching: false, error: '', message_sent: false })
};

export const userProfileFailure = (state, { error }) =>
    state.merge({ fetching: false, error: error });

export const userWalletRequest = (state, { data }) =>
    state.merge({ fetching: true, error: '' });

export const userWalletSuccess = (state, { error }) => {
    return state.merge({ fetching: false, error: '', message_sent: false })
};

export const userWalletFailure = (state, { error }) =>
    state.merge({ fetching: false, error: error });

export const clearSetup = (state, action) => state.merge(INITIAL_STATE);

export const verificationEmailResend = (state) =>
    state.merge();
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SETUP_REQUEST]: request,
    [Types.SETUP_SUCCESS]: success,
    [Types.SETUP_FAILURE]: failure,
    [Types.SETUP_MOBILE_REQUEST]: mobileRequest,
    [Types.SETUP_MOBILE_SUCCESS]: mobileSuccess,
    [Types.SETUP_MOBILE_FAILURE]: mobileFailure,
    [Types.SETUP_MOBILE_RESET]: mobileReset,
    [Types.SETUP_MOBILE_CHECK_REQUEST]: mobileCheckRequest,
    [Types.SETUP_MOBILE_CHECK_FAILURE]: mobileCheckFailure,
    [Types.SETUP_MOBILE_CHECK_SUCCESS]: mobileCheckSuccess,
    [Types.SETUP_USER_PROFILE_REQUEST]: userProfileRequest,
    [Types.SETUP_USER_PROFILE_SUCCESS]: userProfileSuccess,
    [Types.SETUP_USER_PROFILE_FAILURE]: userProfileFailure,
    [Types.SETUP_USER_WALLET_REQUEST]: userWalletRequest,
    [Types.SETUP_USER_WALLET_SUCCESS]: userWalletSuccess,
    [Types.SETUP_USER_WALLET_FAILURE]: userWalletFailure,
    [Types.SETUP_CLEAR]: clearSetup,
    [Types.SETUP_EMAIL_VERIFICATION_RE_SEND]: verificationEmailResend
});
