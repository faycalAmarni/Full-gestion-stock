import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import {Text, Input, Image} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux'
import Benefices from './Benefices'
class  Home  extends Component {
  render(){
  //console.log(this.props.reduxProduits);
  return (
    <View style={styles.container}>
    
      <FlatList
          data={this.props.reduxProduits}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Benefices produit={item}/>}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const mapStateToProps = (state) => {
  return {
      reduxProduits : state.reduxProduits
  }
}

export default connect(mapStateToProps)(Home)
