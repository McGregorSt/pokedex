import React, { Component } from 'react'
import { Pagination } from '@material-ui/lab'

import './PokesList.css'
import PokeElement from './PokeElement/PokeElement'

class PokesList extends Component {
  render() {
    let pokesList = ''

    if (this.props.pokesFetched) {
      pokesList = this.props.currentPokes.map((poke, ind) => {
        return (
          <div className={`Pokes`}>
            <PokeElement
              key={ind}
              name={poke.name}
              pokeInd={ind}
              clicked={(e) => this.props.clicked(e, ind, poke.url)}
              clickedPoke={this.props.clickedPoke}
              pokeDetails={this.props.pokeDetails}
              active={this.props.active}
            />
          </div>
        )
      })
    }

    return (
      <div className="PokesList" onClick={this.props.clicked}>
        <ul className="PokesGrid">{pokesList}</ul>
        <div className="Pagination">
          <Pagination
            count={this.props.countPages}
            shape="rounded"
            variant="outlined"
            onChange={this.props.paginationChange}
            size="large"
          />
        </div>
      </div>
    )
  }
}

export default PokesList
