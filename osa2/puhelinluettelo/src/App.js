import React from 'react';
import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'
import Catalog from './components/Catalog'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { name: 'Arto Hellas', number: '040-123456' },
                { name: 'Martti Tienari', number: '040-123456' },
                { name: 'Arto Järvinen', number: '040-123456' },
                { name: 'Lea Kutvonen', number: '040-123456' }
            ],
            newName: '',
            newNumber: '',
            filter: ''
        }
    }

    addName = (event) => {
        event.preventDefault()
        console.log('nappia painettu')

        if (!this.state.persons.find(person => person.name === this.state.newName)) {
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

    handleFilterChange = (event) => {
        console.log(event.target.value)
        this.setState({ filter: event.target.value })
    }

    render() {
        const personsToShow =
            this.state.filter === '' ?
                this.state.persons :
                this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.filter.toLowerCase()))

        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <FilterForm filter={this.state.filter} handler={this.handleFilterChange} />
                <h3>Lisää uusi</h3>
                <PersonForm name={this.state.newName} number={this.state.newNumber} nameHandler={this.handleNameChange} numberHandler={this.handleNumberChange} submitHandler={this.addName} />
                <h3>Numerot</h3>
                <Catalog persons={personsToShow} />
            </div>
        )
    }
}

export default App
