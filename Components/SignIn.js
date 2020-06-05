import React from 'react';
import { StatusBar, StyleSheet, View, TouchableOpacity, Dimensions, Platform, TextInput } from 'react-native';
import {Text, Input, Icon} from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import  LinearGradient  from 'react-native-linear-gradient';

export default function SignIn() {

  const [data, setData] = React.useState({
    email:'',
    password:'',
    check_textInputChange: false,
    secureTextEntry:true
  });
  const handlePasswordChange = (val) =>{
    setData({
      ...data,
      password : val
    })
  }


  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor = "#009387"/>
        <View style={styles.header}>
            <Text h2 style={styles.text_header} >Se connecter ...</Text>
        </View>
        <View style={styles.footer}>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
              <FontAwesome
                    name="user-o"
                    color='#05375a'
                    size={25}
                    style = {{paddingTop : 10}}
                />
                <Input
                  placeholder = 'Your email'
                  style = {styles.TextInput}
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
                  onChangeText ={ (val) => handlePasswordChange(val)}
                />
            </View>

            <View style={styles.button}>
                <TouchableOpacity style={styles.signIn} onPress={() => {}} >
                    <LinearGradient   colors={['#08d4c4', '#01ab9d']}   style={styles.signIn}  >
                        <Text style={[styles.textSign, {
                            color:'#fff'
                        }]}>Sign In</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>

    </View>
  );
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
