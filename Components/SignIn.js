import React from 'react';
import { StatusBar, StyleSheet, View, TouchableOpacity, Dimensions, Platform, TextInput } from 'react-native';
import {Toast, Root } from 'native-base';
import {Text, Input, Icon} from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux'
import axios from 'react-native-axios';
import  LinearGradient  from 'react-native-linear-gradient';

class SignIn extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      username:'',
      password:'',
      check_textInputChange: false,
      secureTextEntry:true,
      showToast: false
    }
  }

  handlePasswordChange = password =>{
      this.setState({ password });
  }

  handleUsernameChange = username =>{
      this.setState({ username });
  }

  _signIn(){
    var self = this;
    const username = self.state.username
    const password = self.state.password
    const action = {type:"SIGN_IN"}

    const url = 'https://backend-csc.herokuapp.com/api/Users/'+username+","+password+"/"
    axios.get(url)
     .then(function (response) {
       //dispatch action
       self.props.dispatch(action)
       
     })
    .catch(function (error) {
      Toast.show({
               text: "Something wrong with your informations !",
               buttonText: "Ok",
               type: "danger"
             })
      self.handlePasswordChange("")
      self.handleUsernameChange("")
    });
  }
  render(){
  console.log(this.props);
  return (
    <Root>
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor = "#009387"/>
            <View style={styles.header}>
                <Text h2 style={styles.text_header} >Welcome ..</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Username</Text>
                <View style={styles.action}>
                  <FontAwesome
                        name="user-o"
                        color='#05375a'
                        size={25}
                        style = {{paddingTop : 10}}
                    />
                    <Input
                      placeholder = 'Your Username'
                      style = {styles.TextInput}
                      onChangeText ={ this.handleUsernameChange}
                      value = {this.state.username}
                    />
                </View>
                <Text style={styles.text_footer}>Password</Text>
                <View style={styles.action}>
                  <FontAwesome
                        name="lock"
                        color='#05375a'
                        size={25}
                        style = {{paddingTop : 10}}
                    />
                    <Input
                      placeholder = 'Your Password'
                      secureTextEntry={true}
                      style = {styles.TextInput}
                      onChangeText ={this.handlePasswordChange}
                      value = {this.state.password}
                    />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.signIn} onPress={() => {this._signIn()}} >
                        <LinearGradient   colors={['#08d4c4', '#01ab9d']}   style={styles.signIn}  >
                            <Text style={[styles.textSign, {
                                color:'#fff'
                            }]}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    </Root>
  );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontStyle : "italic"
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
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
  }
}

export default connect(mapStateToProps)(SignIn)
