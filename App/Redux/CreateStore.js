import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import Config from '../Config/DebugConfig'
import createSagaMiddleware from 'redux-saga'
import ReduxPersist from '../Config/ReduxPersist'
// import ScreenTracking from './ScreenTrackingMiddleware'
import { persistReducer, persistStore } from 'redux-persist'
import reducers from '../Redux'
import {
    createNavigationReducer,
    createReactNavigationReduxMiddleware,
    reduxifyNavigator
} from "react-navigation-redux-helpers";
import AuthenticationStack from "../Navigation/AppNavigation";
import { connect } from 'react-redux';
import rootSaga from '../Sagas/'



/* ------------- Redux Configuration ------------- */

const middleware = [];
const enhancers = [];

/* ------------- Saga Middleware ------------- */

const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

/* ------------- Redux + react-navigation ------------- */

const appReducer = reducers(createNavigationReducer(AuthenticationStack));

const navMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

middleware.push(navMiddleware);

/* ------------- Add Router ------------- */

const App = reduxifyNavigator(AuthenticationStack, "root");
const mapStateToProps = (state) => ({
    state: state.nav,
});

/* ------------- Analytics Middleware ------------- */
// middleware.push(ScreenTracking);

/* ------------- Assemble Middleware ------------- */

enhancers.push(applyMiddleware(...middleware));
const reducer = persistReducer(ReduxPersist.storeConfig, appReducer);

let store = createStore(reducer, composeWithDevTools(...enhancers));
let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

const AppWithNavigationState = connect(mapStateToProps)(App);
export default {persistor, store, AppWithNavigationState}

