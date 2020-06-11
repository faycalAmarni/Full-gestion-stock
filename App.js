import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MainTabScreen from './Components/MainTabScreen'

import {DrawerContent} from './Components/DrawerContent'
import RootStackScreen from './Components/RootStackScreen'
import Product from './Components/Product'
const Drawer = createDrawerNavigator();

import {Provider} from 'react-redux'
import Store from './Store/configureStore'


export default function App() {

    return (
      <Provider store={Store}>
        <NavigationContainer>
          <Drawer.Navigator drawerContent = {props => <DrawerContent {...props}/>}  >
            <Drawer.Screen name="MainTabScreen" component={MainTabScreen} />
            <Drawer.Screen name="Users" component={Product} />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
   );

}
