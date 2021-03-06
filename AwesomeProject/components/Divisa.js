// http://data.fixer.io/api/latest?access_key=869a4e85e4c8db07005c445355ba0b7e
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class Divisa extends Component {
    constructor(props){
        super(props)
            this.state = { divisas: [] }
    }     
    componentDidMount(){
        fetch('http://data.fixer.io/api/latest?access_key=869a4e85e4c8db07005c445355ba0b7e')
            .then(response => {
                console.log(response.json());                
                return response.json()                            
            })
            .then(divisas => {
                this.setState({ divisas: divisas })
            })
    }

    render() {
        console.log(this.state.divisas);
        
        if(this.state.divisas.length > 0) {
            return (
                <Text>{this.state.divisas}</Text>
            )
        } else {
            return <Text>.....Cargando........</Text>
        }
    }
}


// const styles = StyleSheet.create({
//     container: {
//         fontWeight: 'bold',
//         fontSize: 30,
//         textAlign: 'center',
//         marginTop: 60,
//     },
// });


// ciclo de vida de un componentes
// almacenar en estado para que se actualice la app