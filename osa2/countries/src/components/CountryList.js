import React from 'react';

const CountryList = (props) => {
    if (props.countries.length === 1) {
        return (
            <div>
                    <h1>{props.countries[0].name} {props.countries[0].nativeName}</h1>
                    <p>capital: {props.countries[0].capital}</p>
                    <p>population: {props.countries[0].population}</p>
                    <p><img src={props.countries[0].flag} height="300" alt="Flag"/></p>

             </div>
        )
    } else if (props.countries.length > 10) {
            return (
                <div>
                        too many matches, specify another filter
                 </div>
            )
        } else {
            return (
            <table>
                <tbody>
                    {props.countries.map(country => <tr key={country.name}><td>{country.name}</td></tr>)}
                </tbody>
            </table>
        )
    }
}

export default CountryList
