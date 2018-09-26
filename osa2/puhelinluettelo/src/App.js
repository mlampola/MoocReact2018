import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { name: 'Arto Hellas' }
            ],
            newName: '',
            newNumber: ''
        }
    }

    addName = (event) => {
        event.preventDefault()
        console.log('nappia painettu')

        if (!this.state.persons.find(person => person.name ===  this.state.newName)) {
            const persons = this.state.persons.concat({ name: this.state.newName, number: this.state.newNumber })

            this.setState({
                persons: persons,
                newName: '',
                newNumber: ''
    
            })
        } else {
            console.log('henkilö ' + this.state.newName + ' on jo olemassa')
            this.setState({
                 newName: '',
                 newNumber: ''
     
            })
       }
    }

    handleNameChange = (event) => {
        console.log(event.target.value)
        this.setState({ newName: event.target.value })
    }

    handleNumberChange = (event) => {
        console.log(event.target.value)
        this.setState({ newNumber: event.target.value })
    }

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form onSubmit={this.addName}>
                    <div>
                        nimi: <input value={this.state.newName} onChange={this.handleNameChange} />
                    </div>
                    <div>
                        numero: <input value={this.state.newNumber} onChange={this.handleNumberChange} />
                    </div>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <table><tbody>
                {this.state.persons.map(person => <tr key={person.name}><td>{person.name}</td><td>{person.number}</td></tr>)}
                </tbody></table>
            </div>
        )
    }
}

export default App
