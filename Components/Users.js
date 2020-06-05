import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Text, Input, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import UserForm from './UserForm'

export default function Users({navigation}) {
  return (
    <View style={styles.container}>
      <View  style={{justifyContent:"center" , alignItems: "center"}}><Text h3 >Users</Text></View>
      <Button
              title= "Go to user form"
              onPress={() => {navigation.navigate("UserForm")}}
           />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
