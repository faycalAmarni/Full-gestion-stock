import React, { Component } from 'react';
import  {uploadProgress, FireBaseStorage, getFileLocalPath, createStorageReferenceToFile, uploadFileToFireBase}  from '../utils';
import storage from '@react-native-firebase/storage';

import {TouchableOpacity, Alert, Image, StatusBar} from 'react-native'
import { Avatar } from 'react-native-elements';
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
    }
  }
  _signOut(){
    Alert.alert("Oops")
    const action = {type:"SIGN_OUT"}
    this.props.dispatch(action)
  }


  render() {
    //const FireBaseStorage = storage()
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

      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignout : state.logReducer.isSignout,
  }
}

export default connect(mapStateToProps)(Settings)
