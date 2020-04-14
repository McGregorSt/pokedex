import React, { Component } from 'react'

import './PokeElement.css'
import PokeDetails from './PokeDetails/PokeDetails'
 
class PokeElement extends Component {

  state = {
    isClicked: false
  }

  render() {

    let pokeElement = (
        <p>{this.props.name}</p>
    )

    if (this.props.clickedPoke === this.props.pokeInd) {
      pokeElement = (
        <PokeDetails 
          pokeName={this.props.name} 
          pokeDetails={this.props.pokeDetails}
          isClicked={this.props.isClicked}
          active={this.props.active}
          />
      )
    }

    return <li 
              className={`PokeElm`} 
              onClick={this.props.clicked}
              >
      {pokeElement}
    </li>
  }
}
 
export default PokeElement