import React, { Component } from 'react'

import './PokeFilter.css'
import FilterInput from './FilterInput/FilterInput'

class PokeFilter extends Component {
  render() {
    return (
        <div className="PokeFilter">
          <FilterInput
            filterPokes={this.props.filterPokes}
            keyDown={this.props.keyDown}
          />
        </div>
    )
  }
}

export default PokeFilter
