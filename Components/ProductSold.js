import React, { Component } from 'react';
import axios from 'react-native-axios';
import {Alert} from 'react-native'
import { View, Button, Text, Container, Header, Content, Form, Item, Input, Label, Toast, Root } from 'native-base';
export default class ProductSold extends Component {

  constructor(props){
    const produit = props.route.params
    super(props)
    this.state = {
      quantite : "" ,
      prixVente : ""+produit.prixVente,
    }
  }

  updateQuantite = quantite => {
    this.setState({ quantite });
  };
  updatePrixVente = prixVente => {
   this.setState({ prixVente });
  };

  _isMissing = (produit) =>{
      return (
                 this.state.quantite.length > 0
              && this.state.quantite > 0
              && this.state.prixVente.length > 0
              && this.state.prixVente > 0

          )
    }
  _updateBenefice(produit){
    const url = "https://backend-csc.herokuapp.com/api/Produits/"+produit.id+"/"
    const quantite = produit.quantite - this.state.quantite
    const benefice = (this.state.prixVente-produit.prixAchat)  * this.state.quantite
    let that = this
    if(!that._isMissing()){
      Toast.show({
               text: "Something wrong with your informations !",
               buttonText: "Ok",
               type: "danger"
             })
    }
    else if (produit.quantite - that.state.quantite < 0) {
      Toast.show({
               text: "Quantité indisponible !",
               buttonText: "Ok",
               type: "danger"
             })

    }
    else{
      axios.put(url, {
        nom: produit.nom,
        quantite : quantite,
        prixAchat : produit.prixAchat,
        prixVente : produit.prixVente,
        benefice : produit.benefice + benefice
      })
      .then(function (response) {
        Toast.show({
                text: "Ajouter avec succes !",
                buttonText: "Ok",
                type: "success"
              })
      })
      .catch(function (error) {
        console.log(error);
      });

      setTimeout(function(){
        that.props.navigation.navigate("Product")
      }, 3000)
    }

  }

  render() {
    const  produit = this.props.route.params
    return (
    <Root>
      <Container >
        <Content style={{marginTop:40}}>
        <Form >
          <Label style={{margin:5, marginLeft:10, fontWeight:"bold"}}>Quantite *</Label>
          <Item rounded style={{margin:15, marginLeft:15}} >
            <Input
                    onChangeText={this.updateQuantite}
                    value={this.state.quantite}
                    keyboardType={"numeric"} />
          </Item>
          <Label style={{margin:5, marginLeft:10, fontWeight:"bold"}}>Prix de Vente *</Label>
          <Item rounded style={{margin:15, marginLeft:15}} >
            <Input
                    onChangeText={this.updatePrixVente}
                    value= {this.state.prixVente}
                    keyboardType={"numeric"}/>
          </Item>

          <View   style={{margin:25, marginLeft:15, width:115}}>
              <Button rounded onPress={() => {this._updateBenefice(produit)}}>
                <Text>Confirmer</Text>
              </Button>
          </View>

        </Form>
        </Content>
      </Container>
    </Root>
    );
  }
}
