
import React from 'react'
import {connect} from 'react-redux'
import Toast from 'react-native-simple-toast';
import {Modal, TouchableOpacity, Share,  StyleSheet, View, Text, ActivityIndicator, ScrollView, Image } from 'react-native'
import  LinearGradient  from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements'
import { Container, Header, Content, List, ListItem, Right} from 'native-base'
import axios from 'react-native-axios';
import { Button } from 'react-native-paper';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      modalVisible : false,
      addedBy : " "
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

  _getAdded(produit){
    var self = this;
    const url = "https://backend-csc.herokuapp.com/api/Users/"+produit.user+"/"
    axios.get(url)
     .then(function (response) {
       self.setState({addedBy : response.data.username})
   })
    .catch(function (error) {
       console.log(error);
    });
  }
  _deleteProduct(produit){
    const url = "https://backend-csc.herokuapp.com/api/Produits/"+produit.id+"/"
    let that = this
    const action = {type:"DELETE_PRODUCT", value:produit}
    axios.delete(url)
    .then(function (response) {
      Toast.show('Produit supprimé avec succès');
      //dispatch action
      that.props.dispatch(action)
    })
    .catch(function (error) {
      console.log(error);
    });
    setTimeout(function(){

      that.props.navigation.navigate("Product")
    }, 2000)
  }

  _displayProduct() {
    const  produit = this.props.route.params.produit
    if (produit != undefined) {
      return (

            <ScrollView style={styles.scrollview_container}>
              <Image
                style={styles.image}
                source={{uri: produit.imageUri}}
              />
              <Text style={styles.title_text}>{produit.nom}</Text>
              <List>
                <ListItem style={{flexDirection:"row", justifyContent:"space-between"}}>
                  <Text style={styles.default_text}>Quantite </Text>
                  <Text style={styles.stat_text}>{produit.quantite}</Text>
                </ListItem>
                <ListItem style={{flexDirection:"row", justifyContent:"space-between"}}>
                  <Text style={styles.default_text}>Prix de vente </Text>
                  <Text style={styles.stat_text}>{produit.prixVente} Da</Text>
                </ListItem>
                <ListItem style={{flexDirection:"row", justifyContent:"space-between"}}>
                  <Text style={styles.default_text}>Prix d'achat</Text>
                  <Text style={styles.stat_text}> {produit.prixAchat} Da</Text>
                </ListItem>
                <ListItem style={{flexDirection:"row", justifyContent:"space-between"}}>
                  <Text style={styles.default_text}>Bénifice </Text>
                  <Text style={styles.stat_text}>{produit.benefice} Da</Text>
                </ListItem >
                <ListItem style={{flexDirection:"row", justifyContent:"space-between"}}>
                  <Text style={styles.default_text}>Ajouter par </Text>
                  <Text style={styles.stat_text}>{this.state.addedBy}</Text>
                </ListItem>
              </List>
                <View style={{flexDirection:'row', margin:15, justifyContent:'space-between'}}>
                  <TouchableOpacity
                    style={[styles.touchable, {backgroundColor:'red'}]}
                    onPress={() => {this.setModalVisible(true)}}
                  >
                    <Icon name={"delete"}  size={30} color="#fff" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.touchable, {backgroundColor:"#00e500"}]}
                      onPress={() => {this.props.navigation.navigate("ProductUpdate",produit)}}
                  >
                    <Icon name={"update"}  size={30} color="#fff" />
                  </TouchableOpacity>
                  {produit.quantite > 0 ?
                  <TouchableOpacity
                    style={[styles.touchable, {backgroundColor:"#009387"}]}
                    onPress={() => {this.props.navigation.navigate("ProductSold",produit)}}
                  >
                    <Icon name={"shopping-cart"}  size={30} color="#fff" />
                  </TouchableOpacity>
                  : null}
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
                      <View style={{flexDirection:'row'}}>
                        <Button  mode="text"
                                onPress={() => {this.setModalVisible(!this.state.modalVisible);}}>
                          Annuler
                        </Button>
                        <Button  mode="text" onPress={() => {this._deleteProduct(produit);}}>
                          Supprimer
                        </Button>
                      </View>

                    </View>
                  </View>
              </Modal>
              </View>
            </ScrollView>


      )
    }
  }
  componentDidMount(){
    {this._getAdded(this.props.route.params.produit)}
    {this._displayProduct()}
  }
  render() {

    console.log(this.state.addedBy);
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
  touchable :{
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:70,
    height:70,
    backgroundColor:'#fff',
    borderRadius:50,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    height: 170,
    width : 330,
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
  },
  default_text: {
    fontWeight:"bold",
    fontSize: 22,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  stat_text : {
    fontSize : 20,
    color: '#666666',
    textAlign : 'right',
  }


})

const mapStateToProps = (state) => {
  return {
    isSignout : state.logReducer.isSignout,
    reduxProduits : state.toggleProducts.reduxProduits
  }
}

export default connect(mapStateToProps)(ProductDetail)
