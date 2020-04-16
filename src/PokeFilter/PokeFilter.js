import React, { Component } from 'react'

import './PokeFilter.css'
import FilterSearch from './FilterSearch/FilterSearch'
import FilterInput from './FilterInput/FilterInput'

class PokeFilter extends Component {
  render() {
    return (
      <div>
        <div className="PokeFilter">
          <FilterInput
            filterPokes={this.props.filterPokes}
            keyDown={this.props.keyDown}
          />
          <FilterSearch />
        </div>
      </div>
    )
  }
}

export default PokeFilter
