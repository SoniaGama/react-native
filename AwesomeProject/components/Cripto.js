// https://api.coinmarketcap.com/v1/ticker/
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class CriptoApp extends React.Component {
	constructor(props) {
    	super(props)
        this.state = { criptomonedas: [] }
    }

    componentDidMount() {
        fetch('https://api.coinmarketcap.com/v1/ticker/')
        .then((response) => {
            return response.json()
        })
        .then((criptomonedas) => {
            // console.log(criptomonedas[0]);
            
            this.setState({ criptomonedas: criptomonedas })
        })
        .catch(error => {
            console.log(error)            
        });
    }

    parseData() {
        if (this.state.criptomonedas) {
            return this.state.criptomonedas.map((data, i) => {
                return (
                    <View key={i}>
                       <Text>{data.id}</Text> 
                    </View>
                )
            })
        }
    }

    render() {
        return (
            <View>
                {this.parseData()}
            </View>
        )
        }
    }


export default CriptoApp;