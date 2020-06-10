import React from 'react';
import {ActivityIndicator, TouchableOpacity, StyleSheet, FlatList, View, Image, Text, Button,Alert } from 'react-native';
import {Icon} from 'react-native-elements'
import { FAB } from 'react-native-paper';
import {Container} from 'native-base'
import axios from 'react-native-axios';
import ProductItem from './ProductItem'
import AddProduct from './AddProduct'
class Product extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      searchedText : "",
      produits : [],
      isLoading : true,
      active: false,
    }
  }
  updateSearch = searchedText => {
   this.setState({ searchedText });
  };

  componentDidMount(){
    {this._getProduits()}
  }

  _getProduits = () => {
    var self = this;
    axios.get('https://backend-csc.herokuapp.com/api/Produits/')
     .then(function (response) {
       self.setState({produits: response.data, isLoading:false,})
     })
    .catch(function (error) {
       console.log(error);
    });
  }

  componentDidUpdate(){
    {this._getProduits()}
  }

  _displayLoading() {
     if (this.state.isLoading) {
       return (
         <View style={styles.loading_container}>
           <ActivityIndicator size='large' />
          </View>
       )
     }
   }

  _displayDetailForProduct = (prod) => {
     this.props.navigation.navigate("ProductDetail", {produit: prod})
   }

  render(){
  return (
    <Container>
      <View style={{flex:1 }}>
        {this._displayLoading()}
        <FlatList
            data={this.state.produits}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <ProductItem produit={item} displayDetailForProduct = {this._displayDetailForProduct} />}
        />
        <View >
          <FAB
             style={styles.fab}
             large
             icon="plus"
             onPress={() => this.props.navigation.navigate("AddProduct")}
           />
        </View>

      </View>
    </Container>  
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    backgroundColor:"#009387",
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 10,
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Product