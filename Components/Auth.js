// Components/Test.js

import React, { useEffect, useState } from 'react';
import axios from 'react-native-axios';
import { ActivityIndicator, FlatList, Text, View, Alert } from 'react-native';


class Auth extends React.Component  {

  constructor(props){
    super(props),
    this.state = {
        Acteurs : [],
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:8000/article/`)
      .then(res => {
        console.log("DIDD");
        const nameList = res.data;
        this.setState({ Acteurs });
      })
  }
  render(){
  const {nameList} = this.state;
  {this.componentDidMount()}
  console.log(this.state);
  return (

    <View style={{ flex: 1, padding: 24 }}>

        <Text>This is For {}</Text>

    </View>
  );
  }
};
export default Auth
