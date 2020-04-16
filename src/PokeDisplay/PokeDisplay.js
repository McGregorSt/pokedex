import React, { Component } from 'react'

import './PokeDisplay.css'
import PokesList from './PokesList/PokesList'

class PokeDisplay extends Component {
  render() {
    const pokesList = (
      <PokesList
        pokesToDisplay={this.props.pokesToDisplay}
        pokesFetched={this.props.pokesFetched}
        pokesList={this.props.pokesList}
        filteredPokes={this.props.filteredPokes}
        currentPokes={this.props.currentPokes}
        clicked={this.props.clicked}
        clickedPoke={this.props.clickedPoke}
        pokeDetails={this.props.pokeDetails}
        pokeInd={this.props.PokeInd}
        active={this.props.active}
        countPages={this.props.countPages}
        paginationChange={this.props.paginationChange}
      />
    )
    return <div>{pokesList}</div>
  }
}

export default PokeDisplay
