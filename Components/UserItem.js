import React, { Component } from 'react';
import {Icon} from 'react-native-elements'
import {View} from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class UserItem extends Component {
  render() {
    const user = this.props.user
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require("../Images/Koala.jpg")} />
              </Left>
              <Body>
                <View style={{flexDirection:'row'}}>
                  <Text>{user.nom} {user.prenom} </Text>
                  {user.admin ?
                  <Icon name="verified-user" />
                  : null }
                </View>
                <Text note numberOfLines={1}>{user.username}</Text>
              </Body>
              <Right>
               { !user.admin ?
                <Button transparent>
                  <Text>Supprimer</Text>
                </Button>
                : null }  
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
