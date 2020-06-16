import React, { Component } from 'react';
import  LinearGradient  from 'react-native-linear-gradient';
import {Alert,Button,TouchableOpacity,StyleSheet} from 'react-native'
import Product from "./Product"
import axios from 'react-native-axios';
import {View,  Text,  Container, Header, Content, Form, Item, Input, Label, Toast, Root } from 'native-base';
export default class AddUser extends Component {

  constructor(props){
    super(props)
    this.state = {
      nom : "",
      prenom : "",
      username : "",
      password : "",
      admin : false,
    }
  }
  updateNom = nom => {
   this.setState({ nom });
 };
 updatePrenom = prenom => {
  this.setState({ prenom });
  };
  updateUsername = username => {
   this.setState({ username });
  };
  updatePassword = password => {
   this.setState({ password });
  };

  _isMissing = () =>{
    return (
          this.state.nom.length > 0
            && this.state.prenom.length > 0
            && this.state.username.length > 0
            && this.state.password.length > 0
          )
  }
  _addUser(){
    let that = this
    if (that._isMissing()){
      axios.post('https://backend-csc.herokuapp.com/api/Users/', {
      nom: that.state.nom,
      prenom : that.state.prenom,
      username : that.state.username,
      password : that.state.password
      })
      .then(function (response) {
        //show  succes Toast
        Alert.alert("Ajouter avec succes")
        //Reset all states
        that.updateNom("")
        that.updatePrenom("")
        that.updateUsername("")
        that.updatePassword("")
      })
      .catch(function (error) {
        console.log(error.response);
      });

    }
    else{
      Alert.alert("Oops !")
    }
  }
  render() {
    console.log(this.state);
    return (
     <Root>
      <Container >
        <Content style={{marginTop:20, padding: 16}}>
          <Form >
            <Label style={{margin:5, marginLeft:10, fontWeight:"bold"}}>Nom  *</Label>
            <Item rounded style={{margin:15, marginLeft:15}}>
              <Input
                    onChangeText={this.updateNom}
                    value={this.state.nom} />
            </Item>
            <Label style={{margin:5, marginLeft:10, fontWeight:"bold"}}>Prénom *</Label>
            <Item rounded style={{margin:15, marginLeft:15}} >
              <Input
                      onChangeText={this.updatePrenom}
                      value={this.state.prenom}
                       />
            </Item>
            <Label style={{margin:5, marginLeft:10, fontWeight:"bold"}}>Nom d'utilisateur *</Label>
            <Item rounded style={{margin:15, marginLeft:15}} >
              <Input
                      onChangeText={this.updateUsername}
                      value={this.state.username}
                      />
            </Item>
            <Label style={{margin:5, marginLeft:10, fontWeight:"bold"}}>Mot de passe *</Label>
            <Item rounded style={{margin:15, marginLeft:15}} >
              <Input
                      onChangeText={this.updatePassword}
                      value={this.state.password}
                      />
            </Item>

            <View   style={{margin:25, marginLeft:15, width:100}}>
                  <TouchableOpacity style={styles.signIn} onPress={() => {this._addUser()}} >
                      <LinearGradient   colors={['#08d4c4', '#01ab9d']}   style={styles.signIn}  >
                          <Text style={[styles.textSign, {
                              color:'#fff'
                          }]}>Ajouter</Text>
                      </LinearGradient>
                  </TouchableOpacity>
            </View>

          </Form>
        </Content>
      </Container>
    </Root>
    );
  }
}
const styles = StyleSheet.create({

    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
