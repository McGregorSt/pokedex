import React, { Component } from 'react'

import './FilterInput.css'
class FilterInput extends Component {
  render() {
    return (
      <div className="FilterInput">
        <input
          placeholder='Search for your favourite Poke'
          className="FilterInput__input"
          onChange={this.props.filterPokes}
          onKeyDown={this.props.keyDown}
        ></input>
      </div>
    )
  }
}

export default FilterInput
