import React, { Component } from 'react';

import './App.css';
import PokeDisplay from './PokeDisplay/PokeDisplay';
import PokeFilter from './PokeFilter/PokeFilter';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=30&offset=6'
class App extends Component {

  state = {
    pokesFetched: false,
    pokesList: [],
    clickedPoke: null,
    pokeDetails: {},
    active: false
  }
  
  fetchPokesList = () => {
    return this.fetchUrl(baseUrl).then(async pokes => {
      const pokesList = await pokes.json()

      this.setState({ 
        pokesList: pokesList.results,
        pokesFetched: true
      }) 
    })
  }

  fetchUrl = async (endpoint) => {
    const response = await fetch(endpoint)
    return response
  }

  clickedPokeHandler = (e, ind, pokeUrl) => {
    console.log('clicked', ind, pokeUrl)
    if (this.state.clickedPoke === ind) {
      this.setState({ clickedPoke: null })
    } else {
      this.setState({ clickedPoke: ind })
      this.setState({ active: !this.state.active })
      this.fetchUrl(pokeUrl).then(async poke => {
        const details = await poke.json()
        this.setState({ pokeDetails: details })
      })
    }
  }

  componentDidMount () {
    this.fetchPokesList()
  }

  render () {
    return (
      <div className="App">
        <PokeFilter />
        <PokeDisplay 
          pokesFetched={this.state.pokesFetched}
          pokesList={this.state.pokesList}
          fetchPokesList={this.fetchPokesList}
          clicked={this.clickedPokeHandler}
          clickedPoke={this.state.clickedPoke}
          pokeDetails={this.state.pokeDetails}
          active={this.state.active}
        />
      </div>
    );

  }
}

export default App;
