import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Auth from './Auth'
import Home from './Home'
import DrawerS from './DrawerS'
import Product from './Product'
import Settings from './Settings'
import Users from "./Users"

const AuthStack = createStackNavigator();
const AccStack = createStackNavigator();
const ProductStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Product"
    >
    <Tab.Screen
      name="Explore"
      component={AuthStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor : '#009387',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Acceuil"
      component={AccStackScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarColor : '#009387',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Product"
      component={ProductScreen}
      options={{
        tabBarLabel: 'Product',
        tabBarColor : '#009387',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingstScreen}
      options={{
        tabBarLabel: 'Settings',
        tabBarColor : '#009387',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="settings" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>

);

export default MainTabScreen;



const AuthStackScreen = ({navigation}) => (
  <AuthStack.Navigator screenOptions = {{
          headerStyle : {
            backgroundColor : "#009387"
          },
          headerTintColor : "#fff",
          headerTitleStyle : {
            fontWeight : 'bold'
          }

        }}>
      <AuthStack.Screen name="Auth" component={Auth}
        options = {{
          headerLeft : () => (
            <Icon.Button name="ios-menu" size={25}  backgroundColor = "#009387"
             onPress={() => {navigation.openDrawer();}} > </Icon.Button >
          )
        }}/>
   </AuthStack.Navigator>
)

const AccStackScreen = ({navigation}) => (
  <AccStack.Navigator screenOptions = {{
      headerStyle : {
        backgroundColor : "#009387"
      },
      headerTintColor : "#fff",
      headerTitleStyle : {
        fontWeight : 'bold'
      }

      }}>
      <AccStack.Screen name="Acceuil" component={Home}
        options = {{
          headerLeft : () => (
            <Icon.Button name="ios-menu" size={25}  backgroundColor = "#009387"
             onPress={() => {navigation.openDrawer();}} > </Icon.Button >
          )
        }}
      />
  </AccStack.Navigator>
)

const ProductScreen = ({navigation}) => (
  <ProductStack.Navigator screenOptions = {{
      headerStyle : {
        backgroundColor : "#009387"
      },
      headerTintColor : "#fff",
      headerTitleStyle : {
        fontWeight : 'bold'
      }

      }}>
      <ProductStack.Screen name="Product" component={Product}
        options = {{
          headerLeft : () => (
            <Icon.Button name="ios-menu" size={25}  backgroundColor = "#009387"
             onPress={() => {navigation.openDrawer();}} > </Icon.Button >
          )
        }}
      />
  </ProductStack.Navigator>
)

const SettingstScreen = ({navigation}) => (
  <SettingsStack.Navigator screenOptions = {{
      headerStyle : {
        backgroundColor : "#009387"
      },
      headerTintColor : "#fff",
      headerTitleStyle : {
        fontWeight : 'bold'
      }

      }}>
      <SettingsStack.Screen name="Settings" component={Settings}
        options = {{
          headerLeft : () => (
            <Icon.Button name="ios-menu" size={25}  backgroundColor = "#009387"
             onPress={() => {navigation.openDrawer();}} > </Icon.Button >
          )
        }}
      />
  </SettingsStack.Navigator>
)
