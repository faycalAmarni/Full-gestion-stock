import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MainTabScreen from './MainTabScreen'
import {connect} from 'react-redux'
import {DrawerContent} from './DrawerContent'
import RootStackScreen from './RootStackScreen'
import Product from './Product'
const Drawer = createDrawerNavigator();
import SignIn from './SignIn'


class RootScreen extends React.Component {

    render(){
    return (

          <NavigationContainer>
           {this.props.isSignout  ? (
             <SignIn />
          ) : (
            <Drawer.Navigator drawerContent = {props => <DrawerContent {...props}/>}  >
              <Drawer.Screen name="MainTabScreen" component={MainTabScreen} />
              <Drawer.Screen name="Users" component={Product} />
            </Drawer.Navigator>
          ) }
          </NavigationContainer>

   );
   }
}

const mapStateToProps = (state) => {
  return {
    isSignout : state.logReducer.isSignout,
  }
}

export default connect(mapStateToProps)(RootScreen)
