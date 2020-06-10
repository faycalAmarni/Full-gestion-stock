import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Auth from './Auth'
import Home from './Home'
import DrawerS from './DrawerS'
import Product from './Product'
import Settings from './Settings'
import Users from "./Users"
import AddProduct from './AddProduct'
import ProductDetail from './ProductDetail'
import ProductUpdate from './ProductUpdate'
import ProductSold from './ProductSold'

const AuthStack = createStackNavigator();
const AccStack = createStackNavigator();
const ProductStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Product"
    >
    <Tab.Screen
      name="Product"
      component={ProductScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor : '#009387',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={AuthStackScreen}
      options={{
        tabBarLabel: 'Other',
        tabBarColor : '#009387',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
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
