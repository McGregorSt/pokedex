import React, { Component } from 'react'

import './FilterInput.css'
class FilterInput extends Component {
  render() {
   return (
    <div className='FilterInput'>
      <input className='FilterInput__input' onChange={this.props.filterPokes}></input>
    </div>
  )}
}
 
export default FilterInput