import React, { Component } from 'react';
import {TouchableOpacity, Alert} from 'react-native'
import {connect} from 'react-redux'
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
 class Settings extends Component {

  _signOut(){
    const action = {type:"SIGN_OUT"}
    this.props.dispatch(action)

  }

  render() {
    return (
      <Container>

        <Content>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF0501" }} onPress={() => {this._signOut()}}>
                <Icon active name="log-out" />
              </Button>
            </Left>
            <Body>
              <Text>Sign Out</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Wi-Fi</Text>
            </Body>
            <Right>
              <Text>GeekyAnts</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="bluetooth" />
              </Button>
            </Left>
            <Body>
              <Text>Bluetooth</Text>
            </Body>
            <Right>
              <Text>On</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignout : state.logReducer.isSignout,
  }
}

export default connect(mapStateToProps)(Settings)
