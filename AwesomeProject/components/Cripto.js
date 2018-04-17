// https://api.coinmarketcap.com/v1/ticker/
import React from 'react';

class CriptoApp extends React.Component {
	constructor(props) {
    	super(props)
        this.state = { criptomonedas: [] }
    }

    componentWillMount() {
        fetch('https://api.coinmarketcap.com/v1/ticker/')
        .then((response) => {
            return response.json()
        })
        .then((criptomonedas) => {
            this.setState({ criptomonedas: criptomonedas })
        })
    }

    render() {
        if (this.state.criptomonedas.length > 0) {
          return (
            <div className="container-fluid">
              <p listado={this.state.criptomonedas} />
            </div>
          )
        } else {
          return <p className="text-center">Cargando criptos...</p>
        }
    }
}

export default CriptoApp;