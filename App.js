import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MainTabScreen from './Components/MainTabScreen'

import {DrawerContent} from './Components/DrawerContent'
import RootStackScreen from './Components/RootStackScreen'
import RootScreen from './Components/RootScreen'
import Product from './Components/Product'
const Drawer = createDrawerNavigator();
import SignIn from './Components/SignIn'
import {Provider} from 'react-redux'
import Store from './Store/configureStore'


class App extends React.Component {

    render(){
      let states = Store.getState();
      let isSignout = states.logReducer.isSignout

    return (
      <Provider store={Store}>
        <RootScreen />
      </Provider>
   );
   }
}

export default App
