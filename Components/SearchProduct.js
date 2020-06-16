import React from 'react';
import {StatusBar, ActivityIndicator, TouchableOpacity, StyleSheet, FlatList, View, Image, Text, Button,Alert } from 'react-native';
import {Icon, SearchBar} from 'react-native-elements'
import { FAB } from 'react-native-paper';
import {Container} from 'native-base'
import {connect} from 'react-redux'
import axios from 'react-native-axios';
import ProductItem from './ProductItem'

class SearchProduct extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      produits : [],
      isLoading : true,
      active: false,
      value : ""
    }
    this.arrayholder = [];
  }

  componentDidMount(){
    {this._getProduits()}
  }

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });
    const newData = this.arrayholder.filter(item => {
      const itemData = item.nom.toLowerCase();

      const textData = text.toLowerCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({ produits: newData });
  };



  _getProduits = () => {
    var self = this;
    axios.get('https://backend-csc.herokuapp.com/api/Produits/')
     .then(function (response) {
       self.setState({produits:response.data, isLoading:false,})
       self.arrayholder = response.data

     })
    .catch(function (error) {
       console.log(error);
    });

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
      <StatusBar barStyle="light-content" backgroundColor = "#009387"/>
      <View style={{flex:1 }}>
        {this._displayLoading()}
        <FlatList
            data={this.state.produits.sort((a,b) => b.date.localeCompare(a.date) )}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <ProductItem produit={item} displayDetailForProduct = {this._displayDetailForProduct} />}
            ListHeaderComponent={this.renderHeader}
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

const mapStateToProps = (state) => {
  return {
    isSignout : state.logReducer.isSignout,
    reduxProduits : state.toggleProducts.reduxProduits
  }
}

export default connect(mapStateToProps)(SearchProduct)
