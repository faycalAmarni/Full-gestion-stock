import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class Benefices extends Component {
  render() {
    const produit = this.props.produit
    return (

          <List>
            <ListItem style={{marginTop:4}}>
              <Text style={styles.name_text}>{produit.nom}</Text>
              <Text style={styles.stat_text}>{produit.benefice} Da</Text>
            </ListItem>
          </List>


    );
  }
}

const styles = StyleSheet.create({

  name_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 2,
    flexWrap: 'wrap',
    color: '#000000',

  },
  stat_text : {
    flex : 1,
    fontSize : 17,
    color: '#666666',
    textAlign : 'right',
  }
})
