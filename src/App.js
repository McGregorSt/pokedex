import React, { Component } from 'react'

import './App.css'
import PokeDisplay from './PokeDisplay/PokeDisplay'
import PokeFilter from './PokeFilter/PokeFilter'

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=44&offset=0'
class App extends Component {
  state = {
    pokesFetched: false,
    pokesList: [],
    filteredPokes: [],
    pokesPerPage: 10,
    currentPage: 1,
    clickedPoke: null,
    pokeDetails: {},
  }

  fetchPokesList = () => {
    return this.fetchUrl(baseUrl).then(async (pokes) => {
      const pokesList = await pokes.json()

      this.setState({
        pokesList: pokesList.results,
        filteredPokes: pokesList.results,
        pokesFetched: true,
      })
    })
  }

  fetchUrl = async (endpoint) => {
    const response = await fetch(endpoint)
    return response
  }

  clickedPokeHandler = (e, ind, pokeUrl) => {
    if (this.state.clickedPoke === ind) {
      this.setState({ clickedPoke: null })
    } else {
      this.setState({ clickedPoke: ind })
      this.fetchUrl(pokeUrl).then(async (poke) => {
        const details = await poke.json()
        this.setState({ pokeDetails: details })
      })
    }
  }

  filterPokes = (e) => {
    this.setState({ currentPage: 1 })
    const filteredPokes = this.state.filteredPokes.filter((poke) =>
      poke.name.includes(e.target.value)
    )
    this.setState({
      filteredPokes: filteredPokes,
      currentPokes: filteredPokes,
    })
  }

  keyDownHandler = (e) => {
    if (e.keyCode === 8) {
      this.setState({ filteredPokes: this.state.pokesList })
    }
  }

  onPaginationChangeHandler = (e, value) => {
    this.setState({ currentPage: value })
  }

  checkWidth = () => {
    if (window.innerWidth < 1700) {
      this.setState({ pokesPerPage: 8 })
    }
    if (window.innerWidth < 1300) {
      this.setState({ pokesPerPage: 6 })
    }
    if (window.innerWidth < 1000) {
      this.setState({ pokesPerPage: 4 })
    }
    if (window.innerWidth < 1000) {
      this.setState({ pokesPerPage: 4 })
    }
  }
  
  componentDidMount() {
    this.fetchPokesList()
    window.addEventListener('resize', this.checkWidth)
  }

  render() {
    const lastPoke = this.state.currentPage * this.state.pokesPerPage
    const firstPoke = lastPoke - this.state.pokesPerPage
    const currentPokes = this.state.filteredPokes.slice(firstPoke, lastPoke)
    const countPages = Math.ceil(
      this.state.filteredPokes.length / this.state.pokesPerPage
    )

    return (
      <div className="App">
        <PokeFilter
          filterPokes={(e) => this.filterPokes(e)}
          keyDown={(e) => this.keyDownHandler(e)}
        />
        <PokeDisplay
          pokesFetched={this.state.pokesFetched}
          pokesList={this.state.pokesList}
          filteredPokes={this.state.filteredPokes}
          currentPokes={currentPokes}
          clicked={this.clickedPokeHandler}
          clickedPoke={this.state.clickedPoke}
          pokeDetails={this.state.pokeDetails}
          countPages={countPages}
          paginationChange={this.onPaginationChangeHandler}
        />
      </div>
    )
  }
}

export default App
