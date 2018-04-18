import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Greeting from './components/Greeting';
import Divisa from './components/Divisa';
import CriptoApp from './components/Cripto'

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View>
        {/* <Greeting name='Valeera' /> */}
        <CriptoApp />
        <Divisa />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 60,
  },
});