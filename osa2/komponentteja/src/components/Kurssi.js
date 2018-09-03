import React from 'react'

const Otsikko = (props) => <h2>{props.kurssi.nimi}</h2>

const Osa = (props) => <p>{props.osa} {props.tehtavia}</p>

const Sisalto = (props) => {
    return (
        <div>
            {props.kurssi.osat.map(o => <Osa key={o.id} osa={o.nimi} tehtavia={o.tehtavia} />)}
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

const Kurssi = (props) => {
    return (
        <div>
            <Otsikko kurssi={props.kurssi} />
            <Sisalto kurssi={props.kurssi} />
            <Yhteensa kurssi={props.kurssi} />
        </div>
    )
}

export default Kurssi
