// http://data.fixer.io/api/latest?access_key=869a4e85e4c8db07005c445355ba0b7e
// https://api.coinmarketcap.com/v1/ticker/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}


class Greeting extends Component {
  render() {
    return (
      <Text> Hello {this.props.name} </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
