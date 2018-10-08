import React from 'react'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import Home from '../Containers/Home'
import Settings from '../Containers/Settings'

const HomeStack = createStackNavigator(
    {
        HomeScreen: Home
    },
    {
        // headerMode: 'none',
        initialRouteName: 'HomeScreen'
    }
);

HomeStack.navigationOptions = ({ navigation }) => {
    return {
        // drawerLockMode: 'locked-closed'
    }
};

const SettingsStack = createStackNavigator(
    {
        SettingsScreen: Settings
    },
    {
        // headerMode: 'none',
        initialRouteName: 'SettingsScreen'
    }
);

SettingsStack.navigationOptions = ({ navigation }) => {
    return {
        // drawerLockMode: 'locked-closed'
    }
};

const NavigationDrawer = createDrawerNavigator(
    {
        Home: HomeStack ,
        Settings: SettingsStack
    },
    {
        initialRouteName: 'Home',

        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    }
);

export default NavigationDrawer
