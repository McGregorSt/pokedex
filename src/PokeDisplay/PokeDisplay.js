import React, { Component } from 'react'

import './PokeDisplay.css'
import PokesList from './PokesList/PokesList'
 
class PokeDisplay extends Component {

  

  render() {
    
    // console.log('pokes', pokesList)
   return (
    <div >
      <PokesList
        pokesFetched={this.props.pokesFetched}
        pokesList={this.props.pokesList}
        fetchPokesList={this.props.fetchPokesList}
        clicked={this.props.clicked}
        clickedPoke={this.props.clickedPoke}
        pokeDetails={this.props.pokeDetails}
        pokeInd={this.props.PokeInd}
        active={this.props.active}
      />
    </div>
  )}
}
 
export default PokeDisplay