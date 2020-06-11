import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import User from './User'
import Home from './Home'
import Product from './Product'
import Settings from './Settings'

import AddProduct from './AddProduct'
import ProductDetail from './ProductDetail'
import ProductUpdate from './ProductUpdate'
import ProductSold from './ProductSold'
import AddUser from './AddUser'

const UserStack = createStackNavigator();
const AccStack = createStackNavigator();
const ProductStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Product"
    tabBarOptions={{ showLabel: false, activeTintColor: '#009387', }}
    >
    <Tab.Screen
      name="Product"
      component={ProductScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor : '#009387',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={35} />
        ),
      }}
    />
    <Tab.Screen
      name="User"
      component={UserStackScreen}
      options={{
        tabBarLabel: 'Users',
        tabBarColor : '#009387',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={35} />
        ),
      }}
    />
    <Tab.Screen
      name="Benefices"
      component={AccStackScreen}
      options={{
        tabBarLabel: 'Gain',
        tabBarColor : '#009387',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="tree" color={color} size={35} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingstScreen}
      options={{

        tabBarColor : '#009387',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="settings" color={color} size={35} />
        ),
      }}
    />
  </Tab.Navigator>

);

export default MainTabScreen;



const UserStackScreen = ({navigation}) => (
  <UserStack.Navigator screenOptions = {{
          
          headerStyle : {
            backgroundColor : "#009387"
          },
          headerTintColor : "#fff",
          headerTitleStyle : {
            fontWeight : 'bold'
          }

        }}>
      <UserStack.Screen name="User" component={User}
        options = {{
          title : "Users",
          headerLeft : () => (
            <Icon.Button name="ios-menu" size={25}  backgroundColor = "#009387"
             onPress={() => {navigation.openDrawer();}} > </Icon.Button >
          )
        }}/>
      <UserStack.Screen name="AddUser" component={AddUser} options={{ title: 'Ajouter un utilisateur' }}/>
   </UserStack.Navigator>
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
          title: "Home",
          headerLeft : () => (
            <Icon.Button name="ios-menu" size={25}  backgroundColor = "#009387"
             onPress={() => {navigation.openDrawer();}} > </Icon.Button >
          )
        }}
      />
      <ProductStack.Screen name="AddProduct" component={AddProduct} options={{ title: 'Ajouter un produit' }}/>
      <ProductStack.Screen name="ProductDetail" component={ProductDetail} options={{ title: 'Détails' }}/>
      <ProductStack.Screen name="ProductUpdate" component={ProductUpdate} options={{ title: 'Modification' }}/>
      <ProductStack.Screen name="ProductSold" component={ProductSold} options={{ title: 'Une nouvelle vente' }}/>
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
