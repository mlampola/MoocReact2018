import React from 'react';

const Catalog = (props) => {
    return (
        <table>
            <tbody>
                {props.persons.map(person => <tr key={person.name}>
                <td>{person.name}</td>
                <td>{person.number}</td>
                <td><button type="submit" id={person.id} onClick={props.deleteHandler}>poista</button></td>
               </tr>)}
            </tbody>
        </table>
    )
}

export default Catalog
