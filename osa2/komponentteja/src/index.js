import React from 'react'
import ReactDOM from 'react-dom'

const Osa = (props) => <p>{props.osa} {props.tehtavia}</p>
const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>
const Sisalto = (props) => {
    return (
        <div>
            {props.kurssi.osat.map(o => <Osa key={o.id} osa={o.nimi} tehtavia={o.tehtavia} />)}
        </div>
    )
}
const Kurssi = (props) => {
    return (
        <div>
            <Otsikko kurssi={props.kurssi} />
            <Sisalto kurssi={props.kurssi} />
        </div>
    )
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                id: 1,
                nimi: 'Reactin perusteet',
                tehtavia: 10
            },
            {
                id: 2,
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                id: 3,
                nimi: 'Komponenttien tila',
                tehtavia: 14
            }
        ]
    }
    return (
        <Kurssi kurssi={kurssi} />
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)