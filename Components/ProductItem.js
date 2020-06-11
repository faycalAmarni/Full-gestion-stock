import React, { useEffect, useState } from 'react';
import axios from 'react-native-axios';
import {Modal,  TouchableOpacity, ActivityIndicator, FlatList, Text,  View, Alert, StyleSheet, Image } from 'react-native';
import { Chip, Button } from 'react-native-paper';
import ProductDetail from './ProductDetail'
import moment from 'moment'
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
            source={require("../Images/Penguins.jpg")}
          />
         <View style={styles.content_container}>
            <View style= {styles.header_container}>
              <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title_text}>{produit.nom}</Text>
            </View>
            <View style= {styles.date_container}>
                <Text style={styles.date_text}>
                {moment(new Date(produit.date)).format('DD/MM/YYYY')}
                </Text>
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
    height: 110,
    flexDirection : 'row',
    paddingLeft : 5,
    paddingRight : 5,
    marginTop: 4,
    backgroundColor:'#FFFAFA',
    shadowColor: "#000",
   shadowOffset: {
   	width: 0,
   	height: 3,
   },
   shadowOpacity: 0.29,
   shadowRadius: 4.65,

   elevation: 7,

  },
  image: {
   width: 160,
   height: 100,
   margin: 5
 },
  content_container: {
      flex : 1,
      margin : 5
  },
  header_container: {
    flex : 4,
  },
  title_text: {
      fontWeight : 'bold',
      fontSize : 23,
      paddingRight : 5,
      paddingTop: 10,
      flex : 1,
      flexWrap : 'wrap',
      fontStyle : 'italic'
  },

  date_container : {
    flex : 1
  },
  date_text : {
    fontWeight : 'bold',
    fontSize : 14,
    color: '#666666',
    textAlign : 'right',
  }

})


export default ProductItem
