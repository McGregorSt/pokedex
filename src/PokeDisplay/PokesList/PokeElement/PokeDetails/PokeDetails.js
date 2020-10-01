import React, { Component } from 'react'

import './PokeDetails.css'
import PokeStats from './PokeStats'

class PokeDetails extends Component {
  state = {
    showDetails: false,
    statsClicked: '',
    detailsToDisplay: [],
  }

  showDetailsClicked = (details) => {
    switch (details) {
      case 'abilities':
        return this.props.pokeDetails.abilities
      case 'stats':
        return this.props.pokeDetails.stats
      default:
        return
    }
  }

  onDetailsClick = (e, ind) => {
    e.stopPropagation()

    const statsClicked = e.target.innerText.toLowerCase()
    this.setState({ statsClicked: statsClicked })

    if (ind !== null && !this.state.showDetails) {
      this.setState({ showDetails: !this.state.showDetails })
    }
    this.setState({ detailsToDisplay: this.showDetailsClicked(statsClicked) })
  }

  render() {
    const details = ['abilities', 'stats']

    let pokeDetails = details.map((detail, ind) => {
      return (
        <div className='Abs' key={detail} onClick={(e) => this.onDetailsClick(e, ind)}>
          {detail.toUpperCase()}
        </div>
      )
    })

    let pokeStats = ''
    if (this.state.showDetails) {
      pokeStats = (
        <div>
          <PokeStats
            statsClicked={this.state.statsClicked}
            displayDetails={this.state.detailsToDisplay}
          />
        </div>
      )
    }

    return (
      <div className="PokeDetails">
        <div className="PokeName">{this.props.pokeName}</div>
        <div className="PokeSkills">
          {this.state.showDetails ? pokeStats : pokeDetails}
        </div>
      </div>
    )
  }
}

export default PokeDetails
