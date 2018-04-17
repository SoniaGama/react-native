import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Greeting from './components/Greeting';
import Divisa from './components/Divisa';

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View>
        <Greeting name='Ivan' />
        {/* <Divisa /> */}
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