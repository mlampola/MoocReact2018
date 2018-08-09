import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, label }) => (
    <button onClick={handleClick}>{label}</button>
)

const Statistic = ({ name, value }) => (
    <tr><td>{name}</td><td>{value}</td></tr>
)

const Statistics = ({ hyva, neutraali, huono }) => {
    if (hyva === 0 && neutraali === 0 && huono === 0) {
        return (<p>ei yhtään palautetta annettu</p>)
    }

    return (
        <table>
            <tbody>
                <Statistic name="hyvä" value={hyva} />
                <Statistic name="neutraali" value={neutraali} />
                <Statistic name="huono" value={huono} />
                <Statistic name="keskiarvo" value={((hyva - huono) / (huono + neutraali + hyva)).toFixed(1)} />
                <Statistic name="positiivisia" value={(hyva / (huono + neutraali + hyva) * 100).toFixed(1).concat(" %")} />
            </tbody>
        </table>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    klik = (statistic) => () => {
        this.setState({
            [statistic]: this.state[statistic] + 1
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>anna palautetta</h1>
                    <Button handleClick={this.klik("hyva")} label="hyvä" />
                    <Button handleClick={this.klik("neutraali")} label="neutraali" />
                    <Button handleClick={this.klik("huono")} label="huono" />
                    <h1>statistiikka</h1>
                    <Statistics hyva={this.state.hyva} neutraali={this.state.neutraali} huono={this.state.huono} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
