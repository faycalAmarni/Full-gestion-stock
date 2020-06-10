import React, { Component } from 'react';
import Product from "./Product"
import axios from 'react-native-axios';
import {Alert} from 'react-native'
import {View,Button, Text,  Container, Header, Content, Form, Item, Input, Label, Toast, Root } from 'native-base';
export default class AddProduct extends Component {

  constructor(props){
    super(props)
    this.state = {
      nom : "",
      quantite : "",
      prixVente : "",
      prixAchat : "",
      showToast: false
    }
  }
  updateNom = nom => {
   this.setState({ nom });
 };
 updateQuantite = quantite => {
  this.setState({ quantite });
  };
  updatePrixVente = prixVente => {
   this.setState({ prixVente });
  };
  updatePrixAchat = prixAchat => {
   this.setState({ prixAchat });
  };

  _isMissing = () =>{
    return (
          this.state.nom.length > 0
            && this.state.quantite.length > 0
            && this.state.quantite > 0
            && this.state.prixAchat.length > 0
            && this.state.prixAchat > 0
            && this.state.prixVente.length > 0
            && this.state.prixVente > 0
        )
  }
  _addProduct(){

    if (this._isMissing()){
      axios.post('https://backend-csc.herokuapp.com/api/Produits/', {
      nom: this.state.nom,
      quantite : this.state.quantite,
      prixAchat : this.state.prixAchat,
      prixVente : this.state.prixVente
      })
      .then(function (response) {
        //show  succes Toast
        Toast.show({
                text: "Ajouter avec succes !",
                buttonText: "Ok",
                type: "success"
              })
        //Reset all states
        this.updateNom("")
        this.updateQuantite("")
        this.updatePrixAchat("")
        this.updatePrixVente("")
      })
      .catch(function (error) {
        console.log(error.response);
      });
    
    }
    else{
      Toast.show({
               text: "Something wrong with your informations !",
               buttonText: "Ok",
               type: "danger"
             })
    }
  }
  render() {
    console.log(this.state);
    return (
     <Root>
      <Container >
        <Content>
          <Form >
            <Item rounded style={{margin:15, marginLeft:15}}>
              <Input placeholder="  Nom du produit *"
                    onChangeText={this.updateNom}
                    value={this.state.nom} />
            </Item>
            <Item rounded style={{margin:15, marginLeft:15}} >
              <Input placeholder="  Quantite *"
                      onChangeText={this.updateQuantite}
                      value={this.state.quantite}
                      keyboardType={"numeric"} />
            </Item>
            <Item rounded style={{margin:15, marginLeft:15}} >
              <Input placeholder="  Prix d'achat *"
                      onChangeText={this.updatePrixAchat}
                      value={this.state.prixAchat}
                      keyboardType={"numeric"}/>
            </Item>
            <Item rounded style={{margin:15, marginLeft:15}} >
              <Input  placeholder="  Prix de Vente *"
                      onChangeText={this.updatePrixVente}
                      value={this.state.prixVente}
                      keyboardType={"numeric"}/>
            </Item>

            <View   style={{margin:25, marginLeft:15, width:100}}>
                <Button rounded onPress={() => {this._addProduct()}}>
                  <Text>Ajouter</Text>
                </Button>
            </View>

          </Form>
        </Content>
      </Container>
    </Root>
    );
  }
}
