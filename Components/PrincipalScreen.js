import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {Text, Input, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import  LinearGradient  from 'react-native-linear-gradient';

export default function PrincipalScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text h3 >PrincipalScreen </Text>

      <TouchableOpacity onPress={() => {navigation.navigate("SignIn")}} >
          <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signInS} >
              <Text>Sign in </Text>
           </LinearGradient>
       </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  signInS: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
});
