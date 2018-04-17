// http://data.fixer.io/api/latest?access_key=869a4e85e4c8db07005c445355ba0b7e
// https://api.coinmarketcap.com/v1/ticker/

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Greeting from './components/Greeting';

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        {/* <Prueba /> */}
      </View>
    );
  }
}

