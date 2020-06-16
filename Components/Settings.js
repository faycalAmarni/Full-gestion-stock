import React, { Component } from 'react';
import  {uploadProgress, FireBaseStorage, getFileLocalPath, createStorageReferenceToFile, uploadFileToFireBase}  from '../utils';
import storage from '@react-native-firebase/storage';
import moment from 'moment'
import {TouchableOpacity, Alert, Image, StatusBar} from 'react-native'
import { Avatar , SearchBar} from 'react-native-elements';
import axios from 'react-native-axios';
import {connect} from 'react-redux'
import ImageResizer from 'react-native-image-resizer';
import ImagePicker from 'react-native-image-picker'
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
 class Settings extends Component {
   constructor(props) {
    super(props)
    this.state = {
      avatar : require("../Images/Tulips.jpg"),
      loading: false,
      progress: 0,
      search: '',
    }
  }
  _signOut(){
    Alert.alert("Oops")
    const action = {type:"SIGN_OUT"}
    this.props.dispatch(action)
  }
  updateSearch = (search) => {
   this.setState({ search });
 };
  insertHistorique(){
    console.log('Oui');
    axios.post('https://backend-csc.herokuapp.com/api/Historiques/', {
        	     Genre: 'api',
      }, {
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
              }
      })
      .then(response => {
      	console.log(response)
      })
      .catch(error => {
          console.log(error.response)
      });


 }

  render() {
    const { search } = this.state;
    let _ = require('lodash');
    const prod = this.props.reduxProduits
    console.log(prod);
    const groupedByMonth = _.groupBy(prod, event => moment(event.date).month())
    console.log(groupedByMonth);
    return (
      <Container>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF0501" }} onPress={() => {this._signOut()}}>
                <Icon active name="log-out" />
              </Button>
            </Left>
            <Body>
              <Text>Sign Out </Text>
            </Body>
          </ListItem>
            <Button style={{ backgroundColor: "green" }} onPress={() => {this.insertHistorique()}}>
            </Button>
            <SearchBar
             placeholder="Type Here..."
             onChangeText={this.updateSearch}
             
           />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignout : state.logReducer.isSignout,
    reduxProduits : state.toggleProducts.reduxProduits
  }
}

export default connect(mapStateToProps)(Settings)
