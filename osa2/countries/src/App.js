import React, { Component } from 'react';
import axios from 'axios'
import FilterForm from './components/FilterForm'
import CountryList from './components/CountryList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: ''
    }
  }

  handleFilterChange = (event) => {
    console.log(event.target.value)
    this.setState({ filter: event.target.value })
  }

  componentDidMount() {
    console.log('did mount')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ countries: response.data })
      })
  }

  render() {
    const filteredCountries = this.state.countries.filter(country => country.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    const countriesToShow = this.state.filter === '' ? [] : filteredCountries

    return (
      <div>
        <FilterForm filter={this.state.filter} handler={this.handleFilterChange} />
         <CountryList countries={countriesToShow} />
      </div>
    )
  }
}

export default App;
