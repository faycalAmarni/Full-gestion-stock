import React, { Component } from 'react';
import  LinearGradient  from 'react-native-linear-gradient';
import {Alert,Button,TouchableOpacity,StyleSheet} from 'react-native'
import Product from "./Product"
import {connect} from 'react-redux'
import axios from 'react-native-axios';
import {View,  Text,  Container, Header, Content, Form, Item, Input, Label, Toast, Root } from 'native-base';
class AddProduct extends Component {

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
            && this.state.quantite >= 0
            && this.state.prixAchat.length > 0
            && this.state.prixAchat >= 0
            && this.state.prixVente.length > 0
            && this.state.prixVente >= 0
        )
  }
  _addProduct(){
    let that = this
    if (that._isMissing()){
      axios.post('https://backend-csc.herokuapp.com/api/Produits/', {
      nom: that.state.nom,
      quantite : that.state.quantite,
      prixAchat : that.state.prixAchat,
      prixVente : that.state.prixVente
      })
      .then(function (response) {
        //dispatch action
        const action = {type:"ADD_PRODUCT", value:response.data}
        that.props.dispatch(action)
        //show  succes Toast
        Toast.show({
                text: "Ajouter avec succes !",
                buttonText: "Ok",
                type: "success"
              })
        //Reset all states
        that.updateNom("")
        that.updateQuantite("")
        that.updatePrixAchat("")
        that.updatePrixVente("")
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
    
    return (
     <Root>
      <Container >
        <Content style={{marginTop:20}}>
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
                  <TouchableOpacity style={styles.signIn} onPress={() => {this._addProduct()}} >
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

const mapStateToProps = (state) => {
  return {
      reduxProduits : state.reduxProduits
  }
}

export default connect(mapStateToProps)(AddProduct)
