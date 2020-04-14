import React, { Component } from 'react'

import './PokesList.css'
import PokeElement from './PokeElement/PokeElement'
 
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=30&offset=6'

class PokesList extends Component {

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

  render() {

    let pokesList = ''

    if (this.state.pokesFetched) {
      pokesList = this.state.pokesList.map((poke, ind) => {
        return (
          <div className={`Pokes`}>
            <PokeElement 
              key={ind}
              name={poke.name} 
              clicked={(e) => this.clickedPokeHandler(e, ind, poke.url)}
              clickedPoke={this.state.clickedPoke}
              pokeDetails={this.state.pokeDetails}
              pokeInd={ind}
              active={this.state.active}
              />
          </div>
        )
      })
    }

   return (
     <div className='PokesList' >
      <ul className='PokesGrid' >
        {pokesList}
      </ul>

     </div>
  )}
}
 
export default PokesList