import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Text, Input} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Settings() {
  return (
    <View style={styles.container}>
      <View  style={{justifyContent:"center" , alignItems: "center"}}><Text h3 >Settings</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
