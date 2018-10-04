/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { Provider } from 'react-redux'
// import RootContainer from './RootContainer'
import createStore from '../Redux/CreateStore'
import { PersistGate } from 'redux-persist/es/integration/react'
import {ActivityIndicator, View} from 'react-native'
// import ReduxNavigation from "../Navigation/ReduxNavigation";
const {persistor, store, AppWithNavigationState} = createStore;

const onBeforeLift = () => {
    // take some action before the gate lifts
};

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate
                loading={<ActivityIndicator />}
                onBeforeLift={onBeforeLift}
                persistor={persistor}>
                <View style={{flex: 1}}>
                    <AppWithNavigationState />
                </View>
            </PersistGate>
        </Provider>
    )
};

export default App