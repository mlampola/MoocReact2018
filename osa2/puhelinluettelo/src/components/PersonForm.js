import React from 'react';

const PersonForm = (props) => {
    return (
        <form onSubmit={props.submitHandler} >
            <div>
                nimi: <input value={props.name} onChange={props.nameHandler} />
            </div>
            <div>
                numero: <input value={props.number} onChange={props.numberHandler} />
            </div>
            <div>
                <button type="submit">lisää</button>
            </div>
        </form>
    )
}

export default PersonForm
