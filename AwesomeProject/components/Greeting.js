import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class Greeting extends Component {
    render() {
        return (
            <Text style={styles.container}>Hello {this.props.name}</Text>
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
