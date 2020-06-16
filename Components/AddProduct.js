import React, { Component } from 'react';
import  LinearGradient  from 'react-native-linear-gradient';
import {Alert,Button,TouchableOpacity,StyleSheet} from 'react-native'
import Toast from 'react-native-simple-toast';
import {Icon} from 'react-native-elements'
import { ProgressBar, Colors } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker'
import  {getStorageReferenceFromUrl, uploadProgress, getFileLocalPath, createStorageReferenceToFile, uploadFileToFireBase}  from '../utils';
import {connect} from 'react-redux'
import axios from 'react-native-axios';
import {View,  Text,  Container, Header, Content, Form, Item, Input, Label } from 'native-base';
class AddProduct extends Component {

  constructor(props){
    super(props)
    this.state = {
      nom : "",
      quantite : "",
      prixVente : "",
      prixAchat : "",
      imageUri : "https://firebasestorage.googleapis.com/v0/b/gestion-stock-csc.appspot.com/o/price-tags_750.jpg?alt=media&token=4a4ddb54-2883-4bf9-8a4f-3e061d9e8aa9",
      loading: false,
      progress: 0
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
  updateImageUri = imageUri => {
   this.setState({ imageUri });
 };

  insertHistorique = name => {
    let that = this
   axios.post('https://backend-csc.herokuapp.com/api/Historiques/', {
     Genre:  "Ajouté",
     NomProduit : "nom",
     NomUser : that.props.actuelUser.nom,
     PrenomUser : that.props.actuelUser.prenom,
   })
   .then(function (response) {
       //I'll do something
       console.log("Succes");
   })
   .catch(function (error) {
     console.log("Erreurrr",error);
   });
 }

    _avatarClicked() {
      let self = this
      const options = {
        noData: true,
        maxWidth : 400,
        maxHeight: 200,
      };

      ImagePicker.showImagePicker(options, (response) => {
       if (response.didCancel) {}
       else if (response.error) { console.log('Erreur : ', response.error) }
       else {
                 let requireSource = { uri: response.uri }
                 //Promise.resolve(uploadFileToFireBase(response));
                 //console.log("Rani hna");
                 self.setState({imageUri : response.fileName})

                 //console.log(createStorageReferenceToFile(response));
                 this.monitorFileUpload(uploadFileToFireBase(response));
         }
     })
    }
  monitorFileUpload = uploadTask => {
    let self = this
    uploadTask.on('state_changed', snapshot => {
      const progress = snapshot.bytesTransferred / snapshot.totalBytes
      switch (snapshot.state) {
        case 'running':
          self.setState({loading: true, progress:progress})
        break;
        case 'success':
            snapshot.ref.getDownloadURL().then(downloadURL => {
            //self.setState({imageUri : downloadURL})
            self.setState({ progress:progress})
          });
          break;
        default:
          break;
      }
  })}
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
    const img = that.state.imageUri

    if (that._isMissing()){
      axios.post('https://backend-csc.herokuapp.com/api/Produits/', {
        nom: that.state.nom,
        quantite : that.state.quantite,
        prixAchat : that.state.prixAchat,
        prixVente : that.state.prixVente,
        imageUri: img,
        user: that.props.actuelUser.id

      })
      .then(function (response) {
        //dispatch action
        const action = {type:"ADD_PRODUCT", value:response.data}
        that.props.dispatch(action)
        //show  succes Toast
        Toast.show('Produit ajouté avec succès');
        //Reset all states
        that.updateNom("")
        that.updateQuantite("")
        that.updatePrixAchat("")
        that.updatePrixVente("")
        that.setState({loading:false})
      })
      .catch(function (error) {
        console.log(error.response);
      });

    }
    else{
      Alert.alert(
       "Erreur ! Vous avez peut-être :",
       "1- Oublier un champ obligatoire \n2- Saisi une valeur négative",
    );

    }
  }
  render() {
    return (
      <Container >
        <Content style={{marginTop:20, padding: 16}}>
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
            <Label style={{margin:5, marginLeft:10, fontWeight:"bold"}}>Image</Label>
            <TouchableOpacity
              style={[styles.touchable, {backgroundColor:'#08d4c4'}]}
              onPress={() => {this._avatarClicked()}}
            >
              <Icon name={"image"}  size={20} color="#fff" />
            </TouchableOpacity>
            {this.state.loading &&(
            <ProgressBar progress={this.state.progress} color='#08d4c4' style={{width:170, margin:5}} />
            )}
            <View   style={{margin:25, marginLeft:145, width:100}}>
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
    },
    touchable :{
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:40,
      height:40,
      marginLeft: 16,
      backgroundColor:'#fff',
      borderRadius:5,
    },
  });

const mapStateToProps = (state) => {
  return {
    isSignout : state.logReducer.isSignout,
    reduxProduits : state.toggleProducts.reduxProduits,
    actuelUser : state.logReducer.actuelUser
  }
}

export default connect(mapStateToProps)(AddProduct)
