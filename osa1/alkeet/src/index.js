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
    <p key={props.kurssi.key}>{props.kurssi.osa.nimi} {props.kurssi.osa.tehtavia}</p>
    )
}

const Sisalto = (props) => {
    console.log("Sisaltö", props)
    return (
        <div>
            <Osa kurssi={props.osat[0]} />
            <Osa kurssi={props.osat[1]} />
            <Osa kurssi={props.osat[2]} />
        </div>)
 }

const Yhteensa = (props) => {
    console.log("Yhteensa", props)
    return (
        <p>Yhteensä {
            props.osat.map(kurssi => kurssi.osa.tehtavia)
            .reduce((sum, value) => sum + value)
        } tehtävää</p>
    )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }

  const osat = [
      {key: 1, osa: osa1},
      {key: 2, osa: osa2},
      {key: 3, osa: osa3}]
  
  return (
    <div>
        <Otsikko kurssi={kurssi} />
        <Sisalto osat={osat} />
        <Yhteensa osat={osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)