
import React from 'react'
import {Modal, TouchableOpacity, Share, StyleSheet, View, Text, ActivityIndicator, ScrollView, Image } from 'react-native'
import axios from 'react-native-axios';
import { Button } from 'react-native-paper';
import ProductUpdate from './ProductUpdate'
import ProductSold from './ProductSold'

class ProductDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      modalVisible : false,
    }
  }

  setModalVisible = modalVisible => {
   this.setState({ modalVisible });
  };

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  _deleteProduct(id){
    const url = "https://backend-csc.herokuapp.com/api/Produits/"+id+"/"
    axios.delete(url)
    .then(function (response) {
      Alert.alert("Supprimer avec succes !");

    })
    .catch(function (error) {
      console.log(error);
    });
    this.props.navigation.navigate("Product")
  }

  _displayProduct() {
    const  produit = this.props.route.params.produit
    if (produit != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Image
            style={styles.image}
            source={require("./Chrysanthemum.jpg")}
          />
          <Text style={styles.title_text}>{produit.nom}</Text>
          <Text style={styles.default_text}>Publier le </Text>
          <Text style={styles.default_text}>Quantite : {produit.quantite} </Text>
          <Text style={styles.default_text}>Prix de vente : {produit.prixVente} </Text>
          <Text style={styles.default_text}>Prix d'achat : {produit.prixAchat}</Text>
          <Text style={styles.default_text}>Bénifice : {produit.benefice}</Text>
          <Text style={styles.default_text}>Ajouter par : </Text>
          <View style={{flexDirection:'row', margin:15, justifyContent:'space-between'}}>
          <Button color='red' icon='delete' mode="contained" onPress={() => {this.setModalVisible(true)}}>
              Sup
           </Button>
           <Button color='green' icon='update' mode="contained"
                    onPress={() => {this.props.navigation.navigate("ProductUpdate",produit)}}>
               Mod
            </Button>
            {produit.quantite > 0 ?
            <Button color='black' icon='shopping' mode="contained"
                    onPress={() => {this.props.navigation.navigate("ProductSold",produit)}}>
                Ven
             </Button>
             : null
            } 
          </View>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={{fontWeight:'bold', fontWeight:'bold'}}>Supprimer ce produit !</Text>
                  <Text style={styles.modalText}>La suppression de votre produit est irréversible !</Text>
                  <Button  mode="text" onPress={() => {this._deleteProduct(produit.id);}}>
                    Supprimer
                  </Button>
                  <Button  mode="text" onPress={() => {this.setModalVisible(!this.state.modalVisible);}}>
                    Annuler
                  </Button>

                </View>
              </View>
          </Modal>
          </View>
        </ScrollView>
      )
    }
  }
  componentDidUpdate(){
    {this._displayProduct()}
  }
  render() {
    console.log(this.props);

    return (
      <View style={styles.main_container}>
        {this._displayProduct()}
      </View>
    )
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
    height: 200,
    width : 300,
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


export default ProductDetail
