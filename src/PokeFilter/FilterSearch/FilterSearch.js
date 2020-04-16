import React, { Component } from 'react'

import SearchSvg from '../../assets/search.svg'
import './FilterSearch.css'

class FilterSearch extends Component {
  render() {
    return (
      <div className="SearchIcon">
        <img src={SearchSvg} alt="searchPoke" />
      </div>
    )
  }
}

export default FilterSearch
