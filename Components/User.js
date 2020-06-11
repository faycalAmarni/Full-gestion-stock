import React, { Component } from 'react';
import axios from 'react-native-axios';
import {ActivityIndicator, TouchableOpacity, StyleSheet, FlatList, View, Image, Text,Alert } from 'react-native';
import {Icon} from 'react-native-elements'
import { FAB } from 'react-native-paper';
import { Container, Header, Content, List, ListItem, Thumbnail,  Left, Body, Right, Button } from 'native-base';
import UserItem from './UserItem'
import AddUser from './AddUser'

export default class User extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading : true,
      users: [],
    }
  }

  componentDidMount(){
    {this._getUsers()}
  }

  _getUsers = () => {
    var self = this;
    axios.get('https://backend-csc.herokuapp.com/api/Users/')
     .then(function (response) {
       self.setState({users: response.data, isLoading:false,})
     })
    .catch(function (error) {
       console.log(error);
    });
  }

  componentDidUpdate(){
    {this._getUsers()}
  }

  _displayLoading() {
     if (this.state.isLoading) {
       return (
         <View style={styles.loading_container}>
           <ActivityIndicator size='large' />
          </View>
       )
     }
   }


  render() {
    return (
      <View style={{flex:1 }}>
        {this._displayLoading()}
        <FlatList
            data={this.state.users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <UserItem user={item}
             />}
        />
        <View >
          <FAB
             style={styles.fab}
             large
             icon="plus"
             onPress={() => this.props.navigation.navigate("AddUser")}
           />
        </View>

      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    backgroundColor:"#009387",
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 10,
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
