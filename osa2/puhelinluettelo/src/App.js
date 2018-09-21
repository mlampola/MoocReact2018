import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { name: 'Arto Hellas' }
            ],
            newName: ''
        }
    }

    addName = (event) => {
        event.preventDefault()
        console.log('nappia painettu')

        if (!this.state.persons.find(person => person.name ===  this.state.newName)) {
            const persons = this.state.persons.concat({ name: this.state.newName })

            this.setState({
                persons: persons,
                newName: ''
            })
        } else {
            console.log('henkilö ' + this.state.newName + ' on jo olemassa')
            this.setState({
                 newName: ''
            })
       }
    }

    handleNoteChange = (event) => {
        console.log(event.target.value)
        this.setState({ newName: event.target.value })
    }

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form onSubmit={this.addName}>
                    <div>
                        nimi: <input value={this.state.newName} onChange={this.handleNoteChange} />
                    </div>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                {this.state.persons.map(person => <div key={person.name}> {person.name} </div>)}
            </div>
        )
    }
}

export default App
