import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

// screens identified by the router
import Login from '../Containers/Login'
import Home from '../Containers/Home'
import NavigationDrawer from '../Navigation/NavigationDrawer'


const LoginSignup = createStackNavigator(
    {
        LoginScreen: Login,
    },
    {
        initialRouteName: 'LoginScreen',
    }
);

const AuthenticationStack = createStackNavigator(
    {
        HomeScreen: Home
    },
    {
        initialRouteName: 'HomeScreen',
    }
);

const AppNavigation = createSwitchNavigator(
    {
        Auth: AuthenticationStack,
        Login: LoginSignup,
        NavigationDrawer: NavigationDrawer
    },
    {
        initialRouteName: 'NavigationDrawer'
    }
);
export default AppNavigation
