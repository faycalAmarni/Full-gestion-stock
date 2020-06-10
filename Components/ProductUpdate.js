import React, { Component } from 'react';
import Product from "./Product"
import axios from 'react-native-axios';
import {Alert} from 'react-native'
import {View,Button, Text,  Container, Header, Content, Form, Item, Input, Label, Toast, Root } from 'native-base';
export default class ProductUpdate extends Component {

  constructor(props){
    super(props)
    const  produit = this.props.route.params
    this.state = {
      nom : " "+produit.nom,
      quantite : " "+produit.quantite,
      prixVente : " "+produit.prixVente,
      prixAchat : " "+produit.prixAchat,
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
  _updateProduct(id){
    const url = "https://backend-csc.herokuapp.com/api/Produits/"+id+"/"
    let that = this
    if (that._isMissing()){
        axios.put(url, {
        nom: that.state.nom,
        quantite : that.state.quantite,
        prixAchat : that.state.prixAchat,
        prixVente : that.state.prixVente
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
    else{
      Toast.show({
               text: "Something wrong with your informations !",
               buttonText: "Ok",
               type: "danger"
             })
    }
  }
  render() {
    const  produit = this.props.route.params

    return (
    <Root>
      <Container >
        <Content>
          <Form >
            <Label style={{margin:5, marginLeft:10, fontWeight:"bold"}}>Nom du produit *</Label>
            <Item rounded style={{margin:15, marginLeft:15}}>
              <Input
                    onChangeText={this.updateNom}
                    value={this.state.nom} />
            </Item>
            <Label style={{margin:5, marginLeft:10, fontWeight:"bold"}}>Quantite *</Label>
            <Item rounded style={{margin:15, marginLeft:15}} >
              <Input
                      onChangeText={this.updateQuantite}
                      value={this.state.quantite}
                      keyboardType={"numeric"} />
            </Item>
            <Label style={{margin:5, marginLeft:10, fontWeight:"bold"}}>Prix d'achat *</Label>
            <Item rounded style={{margin:15, marginLeft:15}} >
              <Input
                      onChangeText={this.updatePrixAchat}
                      value={this.state.prixAchat}
                      keyboardType={"numeric"}/>
            </Item>
            <Label style={{margin:5, marginLeft:10, fontWeight:"bold"}}>Prix de Vente *</Label>
            <Item rounded style={{margin:15, marginLeft:15}} >
              <Input
                      onChangeText={this.updatePrixVente}
                      value={this.state.prixVente}
                      keyboardType={"numeric"}/>
            </Item>

            <View   style={{margin:25, marginLeft:15, width:100}}>
                <Button rounded onPress={() => {this._updateProduct(produit.id)}}>
                  <Text>Modifier</Text>
                </Button>
            </View>

          </Form>
        </Content>
      </Container>
    </Root>
    );
  }
}
