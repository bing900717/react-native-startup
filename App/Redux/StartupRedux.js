import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    startup: null,
    startupComplete: ["navigate_to"]
});

/* ------------- Types and Action Creators ------------- */

export const StartupTypes = Types;
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    busy: false,
    navigate_to: ''
});

/* ------------- Reducers ------------- */

// request the data from an api
export const init = (state) =>
    state.merge({ busy: true });

export const complete = (state, { navigate_to } ) => {
    return state.merge({ busy: false, 'navigate_to': navigate_to })
};
// successful api lookup

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.STARTUP]: init,
    [Types.STARTUP_COMPLETE]: complete
});
