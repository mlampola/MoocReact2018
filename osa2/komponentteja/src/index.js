import React from 'react'
import ReactDOM from 'react-dom'

const Osa = (props) => <p>{props.osa} {props.tehtavia}</p>
const Otsikko = (props) => <h2>{props.kurssi.nimi}</h2>
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
            <Yhteensa kurssi={props.kurssi} />
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <p>Yhteensä {
            props.kurssi.osat.map(osa => osa.tehtavia)
                .reduce((sum, value) => sum + value)
        } tehtävää</p>
    )
}

const App = () => {
    const kurssit = [
        {
            nimi: 'Half Stack -sovelluskehitys',
            id: 1,
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
        },
        {
            nimi: 'Node.js',
            id: 2,
            osat: [
                {
                    nimi: 'Routing',
                    tehtavia: 3,
                    id: 4
                },
                {
                    nimi: 'Middlewaret',
                    tehtavia: 7,
                    id: 5
                }
            ]
        }

    ]

    return (
        <div>
            <h1>Opetusohjelma</h1>
            {kurssit.map(k => <Kurssi key={k.id} kurssi={k} />)}
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)