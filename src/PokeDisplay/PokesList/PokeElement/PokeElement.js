import React, { Component } from 'react'

import './PokeElement.css'
import PokeDetails from './PokeDetails/PokeDetails'
 
class PokeElement extends Component {

  state = {
    isClicked: false
  }

  render() {

    let pokeElement = (
      <div>
        <p>{this.props.name}</p>
      </div>
    )

    if (this.props.isClicked === this.props.pokeInd) {
      pokeElement = (
        <PokeDetails 
          pokeName={this.props.name} 
          mouseClick={this.props.mouseClick} 
          details={this.props.details}
          />
      )
    }

    return <li className='PokeElm' onClick={this.props.clicked}>
      {pokeElement}
    </li>
  }
}
 
export default PokeElement