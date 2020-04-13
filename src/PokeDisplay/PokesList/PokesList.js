import React, { Component } from 'react'

import './PokesList.css'
import PokeElement from './PokeElement/PokeElement'
import PokeStats from './PokeElement/PokeDetails/PokeStats'
 
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=30&offset=6'

class PokesList extends Component {

  state = {
    pokesFetched: false,
    pokesList: [],
    clickedPoke: null,
    pokeDetails: {},
    
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

  clickedPokeHandler = (ind, pokeUrl) => {
    console.log('clicked', ind, pokeUrl)
    if (this.state.clickedPoke === ind) {
      this.setState({ clickedPoke: null })
    } else {
      this.setState({ clickedPoke: ind })
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
          <div>
            <PokeElement 
              key={ind}
              name={poke.name} 
              url={poke.url} 
              clicked={() => this.clickedPokeHandler(ind, poke.url)}
              isClicked={this.state.clickedPoke}
              details={this.state.pokeDetails}
              pokeInd={ind}
              mouseEnter={this.onMouseEnter} 
              mouseClick={this.onMouseClick}
              showDetails={() => this.state.showDetails()}
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