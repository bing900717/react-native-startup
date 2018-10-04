import { persistCombineReducers } from 'redux-persist/es'
import ReduxPersist from '../Config/ReduxPersist'


export default (navReducer) => {
    /* ------------- Assemble The Reducers ------------- */
    return persistCombineReducers(ReduxPersist.storeConfig, {
        nav: navReducer,
        setup: require('./SetupRedux').reducer,
        startup: require('./StartupRedux').reducer,
    });
}
