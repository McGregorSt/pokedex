import React, { Component } from 'react'

import './PokeDisplay.css'
import PokesList from './PokesList/PokesList'
 
class PokeDisplay extends Component {

  

  render() {
    
    // console.log('pokes', pokesList)
   return (
    <div >
      <PokesList />
    </div>
  )}
}
 
export default PokeDisplay