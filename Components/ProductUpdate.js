import React, { Component } from 'react';
import Product from "./Product"
import axios from 'react-native-axios';
import {connect} from 'react-redux'
import Toast from 'react-native-simple-toast';
import  LinearGradient  from 'react-native-linear-gradient';
import {Alert,Button,TouchableOpacity,StyleSheet} from 'react-native'
import {View, Text,  Container, Header, Content, Form, Item, Input, Label} from 'native-base';

class ProductUpdate extends Component {

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
          && this.state.quantite >= 0
          && this.state.prixAchat.length > 0
          && this.state.prixAchat >= 0
          && this.state.prixVente.length > 0
          && this.state.prixVente >= 0
          )
    }
  _updateProduct(produit){
    const url = "https://backend-csc.herokuapp.com/api/Produits/"+produit.id+"/"
    let that = this

    if (that._isMissing()){
        axios.put(url, {
        nom: that.state.nom,
        quantite : that.state.quantite,
        prixAchat : that.state.prixAchat,
        prixVente : that.state.prixVente
        })
        .then(function (response) {
            Toast.show('Produit modifié avec succès');
            //dispatch action
            const action = {type:"UPDATE_PRODUCT", value:response.data}
            that.props.dispatch(action)

        })
        .catch(function (error) {
          console.log(error);
        });
        setTimeout(function(){
          that.props.navigation.navigate("Product")
        }, 2000)
    }
    else{
        Alert.alert(
         "Erreur ! Vous avez peut-être :",
         "1- Oublier un champ obligatoire \n2- Saisi une valeur négative",
      );
    }
  }
  render() {
    const  produit = this.props.route.params

    return (

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

            <View   style={{margin:25, marginLeft:145, width:100}}>
                <TouchableOpacity style={styles.signIn} onPress={() => {this._updateProduct(produit)}} >
                    <LinearGradient   colors={['#08d4c4', '#01ab9d']}   style={styles.signIn}  >
                        <Text style={[styles.textSign, {
                            color:'#fff'
                        }]}>Modifier</Text>
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

export default connect(mapStateToProps)(ProductUpdate)
