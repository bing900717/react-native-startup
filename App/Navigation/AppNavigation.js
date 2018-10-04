import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

// screens identified by the router
import Login from '../Containers/Login'
import Home from '../Containers/Home'
import {createNavigationReducer} from "react-navigation-redux-helpers";


// const Startup = createStackNavigator(
//     {
//         Startup: { screen: StartupScreen }
//     },
//     {
//         initialRouteName: 'Startup',
//         headerMode: 'none'
//     }
// );

// const Setup = createStackNavigator(
//     {
//         SetupScreen: { screen: SetupScreen }
//     },
//     {
//         initialRouteName: 'SetupScreen',
//         headerMode: 'none'
//     }
// );

const AuthenticationStack = createStackNavigator(
    {
        LoginScreen: Login,
        HomeScreen: Home

    },
    {
        initialRouteName: 'LoginScreen',
    }
);




// const AppNavigation = createSwitchNavigator(
//     {
//         Login: AuthenticationStack
//     },
//     {
//         initialRouteName: 'Login'
//     }
// );
export default AuthenticationStack
