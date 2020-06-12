import React, { Component } from 'react';
import {Icon, Avatar} from 'react-native-elements'
import axios from 'react-native-axios';
import {StyleSheet, ScrollView, Modal, View,Alert} from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class UserItem extends Component {
  constructor(props){
    super(props),
    this.state = {
      modalVisible : false,
    }
  }

  setModalVisible = modalVisible => {
     this.setState({ modalVisible });
    };

    _deleteUser(id){
      const url = "https://backend-csc.herokuapp.com/api/Users/"+id+"/"
      let that = this
      axios.delete(url)
      .then(function (response) {

      })
      .catch(function (error) {
        console.log(error);
      });

    }


  render() {
    const user = this.props.user
    return (
        <ScrollView>
          <List>
            <ListItem thumbnail>
              <Left>
                <Avatar rounded containerStyle={{backgroundColor:"#009387"}} size="medium"
                    title= {user.nom.substring(0,1).toUpperCase()+user.prenom.substring(0,1).toUpperCase()} />
              </Left>
              <Body>
                <View style={{flexDirection:'row'}}>
                  <Text>{user.nom} {user.prenom} </Text>
                  {user.admin ?
                  <Icon name="verified-user" />
                  : null }
                </View>
                <Text note numberOfLines={1}>{user.username}</Text>
              </Body>
              <Right>
               { user.admin ?
                <Button transparent onPress={() => {this._deleteUser(user.id)}} >
                  <Text>Supprimer</Text>
                </Button>
                : null }
              </Right>
            </ListItem>
          </List>

      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  },
  image: {
    height: 169,
    margin: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  share_touchable_floatingactionbutton: {
  position: 'absolute',
  width: 60,
  height: 60,
  right: 30,
  bottom: 30,
  borderRadius: 30,
  backgroundColor: '#e91e63',
  justifyContent: 'center',
  alignItems: 'center'
},
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    height: 170,
    width : 330,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})
