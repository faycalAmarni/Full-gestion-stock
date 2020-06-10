import React, { useEffect, useState } from 'react';
import axios from 'react-native-axios';
import {Modal,  TouchableOpacity, ActivityIndicator, FlatList, Text,  View, Alert, StyleSheet, Image } from 'react-native';
import { Chip, Button } from 'react-native-paper';
import ProductDetail from './ProductDetail'

class ProductItem extends React.Component  {



  render(){
  const produit = this.props.produit;
  const navigate = this.props.displayDetailForProduct;
  return (
    <TouchableOpacity
         onPress={()=>{this.props.displayDetailForProduct(produit)}}
          >
      <View style={styles.main_container}>
          <Image
            style={styles.image}
            source={require("./Chrysanthemum.jpg")}
          />
         <View style={styles.content_container}>
            <View style= {styles.header_container}>
              <Text style={styles.title_text}>{produit.nom}</Text>
            </View>
            <View style={styles.description_container} >
                <Text style={styles.vote_text}>Achat: {produit.prixAchat} Da</Text>
                <Text style={styles.vote_text}>Vente: {produit.prixVente} Da</Text>
                <Chip disable='true' style={{backgroundColor:"#009387", width:130, marginTop:3}} >
                      {produit.quantite} disponibles</Chip>
            </View>
         </View>

      </View>
    </TouchableOpacity>


  );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex :1,
    height: 190,
    flexDirection : 'row',
    paddingLeft : 5,
    paddingRight : 5
  },
  image: {
   width: 120,
   height: 180,
   margin: 5,
   //backgroundColor: 'gray'
 },
  content_container: {
      flex : 1,
      margin : 5
  },
  header_container: {
    flex : 2,
  },
  title_text: {
      fontWeight : 'bold',
      fontSize : 23,
      paddingRight : 5,
      flex : 1,
      flexWrap : 'wrap'
  },
  vote_text: {
      fontWeight : 'bold',
      fontSize : 18,
      color: '#666666'

  },
  description_container : {
      flex : 7
  },
  description_text : {
      fontStyle : 'italic',
      color: '#666666'
  },
  date_container : {
    flex : 1
  },
  date_text : {
    textAlign : 'right',
    fontSize : 14
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


export default ProductItem
