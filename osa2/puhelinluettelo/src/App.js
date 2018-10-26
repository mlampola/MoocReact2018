import React from 'react';
import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'
import Catalog from './components/Catalog'
import Notification from './components/Notification'
import personService from './services/persons'
import './index.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            newName: '',
            newNumber: '',
            filter: '',
            message: null
        }
    }

    addName = (event) => {
        event.preventDefault()
        console.log('Lisää-nappia painettu')
        const person = this.state.persons.find(person => person.name === this.state.newName)

        if (!person) {
            const newPerson = { name: this.state.newName, number: this.state.newNumber }

            personService
                .create(newPerson)
                .then(response => {
                    console.log(response)
                    this.setState({
                        persons: this.state.persons.concat(response.data),
                        newName: '',
                        newNumber: '',
                        message: `lisättiin ${response.data.name}`
                    })
                    setTimeout(() => {
                        this.setState({ message: null })
                    }, 5000)
                })

        } else {
            console.log(`henkilö ${this.state.newName} on jo olemassa`)
            const doUpdate = window.confirm(`${this.state.newName} on jo luettelossa, korvataanko vanha numero uudella?`);
            console.log(doUpdate)

            if (doUpdate) {
                const changedPerson = { ...person, number: this.state.newNumber }

                personService
                    .update(changedPerson.id, changedPerson)
                    .then(response => {
                        console.log(response.data)
                        this.setState({
                            persons: this.state.persons.map(p => p.id !== changedPerson.id ? p : response.data),
                            newName: '',
                            newNumber: '',
                            message: `päivitettiin ${response.data.name}`
                        })
                        setTimeout(() => {
                            this.setState({ message: null })
                        }, 5000)
                    })
            } else {
                this.setState({
                    newName: '',
                    newNumber: ''

                })
            }
        }
    }

    deleteName = (event) => {
        event.preventDefault()
        const id = Number(event.target.id)
        const person = this.state.persons.find(person => person.id === id)
        console.log('Poista-nappia painettu ', id, ' ', person.name)
        const doDelete = window.confirm(`Poistetaanko ${person.name}?`);
        console.log(doDelete)

        if (doDelete) {
            personService
                .remove(id)
                .then(response => {
                    console.log(response)
                    const persons = this.state.persons.filter(n => n.id !== id)
                    console.log(persons)

                    this.setState({
                        persons: persons,
                        newName: '',
                        newNumber: '',
                        message: `poistettiin ${person.name}`
                    })
                    setTimeout(() => {
                        this.setState({ message: null })
                    }, 5000)
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

    componentDidMount() {
        console.log('did mount')
        personService
            .getAll()
            .then(response => {
                console.log('promise fulfilled')
                this.setState({ persons: response.data })
            })
    }

    render() {
        const personsToShow =
            this.state.filter === '' ?
                this.state.persons :
                this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.filter.toLowerCase()))

        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <Notification message={this.state.message} />
                <FilterForm filter={this.state.filter} handler={this.handleFilterChange} />
                <h3>Lisää uusi</h3>
                <PersonForm name={this.state.newName} number={this.state.newNumber} nameHandler={this.handleNameChange} numberHandler={this.handleNumberChange} submitHandler={this.addName} />
                <h3>Numerot</h3>
                <Catalog persons={personsToShow} deleteHandler={this.deleteName} />
            </div>
        )
    }
}

export default App
