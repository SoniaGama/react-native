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

