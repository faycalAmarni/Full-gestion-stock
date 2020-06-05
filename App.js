import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Text} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import MainTabScreen from './Components/MainTabScreen'
import Users from './Components/Users'
import {DrawerContent} from './Components/DrawerContent'
import RootStackScreen from './Components/RootStackScreen'

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();


const Stack = createStackNavigator();

export default function App() {

    return (

      <NavigationContainer>
        <Drawer.Navigator drawerContent = {props => <DrawerContent {...props}/>}  >
          <Drawer.Screen name="MainTabScreen" component={MainTabScreen} />
          <Drawer.Screen name="Users" component={Users} />
        </Drawer.Navigator>
      </NavigationContainer>
   );

}
