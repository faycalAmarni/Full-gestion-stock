import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Text, Input, Image} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {
  return (
    <View style={styles.container}>
      <View  style={{justifyContent:"center" , alignItems: "center"}}><Text h3 >Home</Text></View>

      <Image
        style={{width: 50, height: 50}}
        source={{uri: './Chrysanthemum.jpg'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
