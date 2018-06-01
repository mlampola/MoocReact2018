import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    console.log("Otsikko", props)
    return (
        <h1>{props.kurssi}</h1>
    )

}

const Osa = (props) => {
    console.log("Osa", props)
    return (
        <p key={props.osa.nimi}>{props.osa.nimi} {props.osa.tehtavia}</p>
    )
}

const Sisalto = (props) => {
    console.log("Sisaltö", props)
    return (
        <div>
            <Osa osa={props.osat[0]} />
            <Osa osa={props.osat[1]} />
            <Osa osa={props.osat[2]} />
        </div>)
}

const Yhteensa = (props) => {
    console.log("Yhteensa", props)
    return (
        <p>Yhteensä {
            props.osat.map(osa => osa.tehtavia)
                .reduce((sum, value) => sum + value)
        } tehtävää</p>
    )
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14
            }
        ]
    }
    
    return (
        <div>
            <Otsikko kurssi={kurssi.nimi} />
            <Sisalto osat={kurssi.osat} />
            <Yhteensa osat={kurssi.osat} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)