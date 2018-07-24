import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    klikHyva = () => {
        this.setState({
            hyva: this.state.hyva + 1
        })
    }

    klikNeutraali = () => {
        this.setState({
            neutraali: this.state.neutraali + 1
        })
    }

    klikHuono = () => {
        this.setState({
            huono: this.state.huono + 1
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>anna palautetta</h1>
                    <button onClick={this.klikHyva}>hyva</button>
                    <button onClick={this.klikNeutraali}>neutraali</button>
                    <button onClick={this.klikHuono}>huono</button>
                    <h1>statistiikka</h1>
                    <p>hyvä {this.state.hyva}
                    <br/>neutraali {this.state.neutraali}
                    <br/>huono {this.state.huono}
                    <br/>keskiarvo {((this.state.hyva - this.state.huono) / (this.state.huono + this.state.neutraali + this.state.hyva)).toFixed(1)}
                    <br/>positiivisia {(this.state.hyva / (this.state.huono + this.state.neutraali + this.state.hyva) * 100).toFixed(1)} % </p>
                </div>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)
