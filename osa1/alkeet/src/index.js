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
    <p key={props.kurssi.key}>{props.kurssi.osa} {props.kurssi.tehtavia}</p>
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
            props.osat.map(osa => osa.tehtavia)
            .reduce((sum, value) => sum + value)
        } tehtävää</p>
    )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  const osat = [
      {key: 1, osa: osa1, tehtavia: tehtavia1},
      {key: 2, osa: osa2, tehtavia: tehtavia2},
      {key: 3, osa: osa3, tehtavia: tehtavia3}]
  
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