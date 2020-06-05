import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './SignIn'
import PrincipalScreen from './PrincipalScreen'

const RootStack = createStackNavigator();


const RootStackScreen = ({navigation}) => (

  <RootStack.Navigator headerMode = 'none'>
    <RootStack.Screen name='SignIn' component={SignIn} />
  </ RootStack.Navigator>

);

export default RootStackScreen;
