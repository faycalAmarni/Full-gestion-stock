import React, { Component } from 'react';
import axios from 'react-native-axios';
import Toast from 'react-native-simple-toast';
import {connect} from 'react-redux'
import  LinearGradient  from 'react-native-linear-gradient';
import {Alert,Button,TouchableOpacity,StyleSheet} from 'react-native'
import { View, Text, Container, Header, Content, Form, Item, Input, Label } from 'native-base';
class ProductSold extends Component {

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
      Alert.alert(
       "Erreur ! Vous avez peut-être :",
       "1- Oublier un champ obligatoire \n2- Saisi une valeur négative",
    );
    }
    else if (produit.quantite - that.state.quantite < 0) {
        Alert.alert(
         "Erreur ! ",
         " Quantité indisponible",
      );
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
        Toast.show('Transaction traitée avec succès');
        //dispatch action
        //dispatch action
        const action = {type:"UPDATE_PRODUCT", value:response.data}
        that.props.dispatch(action)

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

      <Container >
        <Content style={{marginTop:20, padding: 10}}>
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

          <View   style={{margin:25, marginLeft:140, width:115}}>
              <TouchableOpacity style={styles.signIn} onPress={() => {this._updateBenefice(produit)}} >
                  <LinearGradient   colors={['#08d4c4', '#01ab9d']}   style={styles.signIn}  >
                      <Text style={[styles.textSign, {
                          color:'#fff'
                      }]}>Confirmer</Text>
                  </LinearGradient>
              </TouchableOpacity>
          </View>

        </Form>
        </Content>
      </Container>

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
    isSignout : state.logReducer.isSignout,
    reduxProduits : state.toggleProducts.reduxProduits
  }
}

export default connect(mapStateToProps)(ProductSold)
