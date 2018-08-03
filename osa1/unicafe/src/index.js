import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, label }) => (
    <button onClick={handleClick}>{label}</button>
)

const Statistic = ({ name, value }) => (
    <div>{name} {value}</div>
)

const Statistics = ({ hyva, neutraali, huono }) => {
    if (hyva === 0 && neutraali === 0 && huono === 0) {
        return(<p>ei yhtään palautetta annettu</p>)
    }

    return (
    <ul style={{listStyleType: 'none', padding: 0}}>
        <li><Statistic name="hyvä" value={hyva} /></li>
        <li><Statistic name="neutraali" value={neutraali} /></li>
        <li><Statistic name="huono" value={huono} /></li>
        <li><Statistic name="keskiarvo" value={((hyva - huono) / (huono + neutraali + hyva)).toFixed(1)} /></li>
        <li><Statistic name="positiivisia" value={(hyva / (huono + neutraali + hyva) * 100).toFixed(1).concat(" %")} /></li>
    </ul>
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
