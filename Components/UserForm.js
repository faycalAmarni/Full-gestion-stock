import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Text, Input} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Users() {
  return (
    <View style={styles.container}>
      <View  style={{justifyContent:"center" , alignItems: "center"}}><Text h3 >User Form</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
