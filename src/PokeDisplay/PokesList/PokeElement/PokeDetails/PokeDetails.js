import React, { Component } from 'react'

import './PokeDetails.css'
import PokeStats from './PokeStats'

class PokeDetails extends Component {

  state = {
    showDetails: false,
    statsClicked: '',
    detailsToDisplay: []
  }

  showDetailsClicked = (details) => {
    switch (details) {
      case 'abilities': return this.props.details.abilities
      case 'stats': return this.props.details.stats
      default: return
    }
  }

  onDetailsClick = (e, ind) => {
    e.stopPropagation()
    const statsClicked = e.target.innerText.toLowerCase()
    console.log(statsClicked)
    this.setState({ statsClicked: statsClicked })
    if (ind !== null && !this.state.showDetails) {
      this.setState({ showDetails: !this.state.showDetails })
    }
    console.log(this.showDetailsClicked(statsClicked))
    this.setState({ detailsToDisplay: this.showDetailsClicked(statsClicked)})
    
  }


  render() {
    const details = [ 'abilities', 'stats']

    let pokeDetails = details.map((detail, ind) => {
      return <div key={detail} onMouseEnter={this.props.mouseEnter} onClick={(e) => this.onDetailsClick(e, ind)}>{detail.toUpperCase()}</div>
    })

    let pokeStats = ''

    if (this.state.showDetails) {
      console.log('pokeStats')
      pokeStats = (
        <PokeStats 
          statsClicked={this.state.statsClicked}
          displayDetails={this.state.detailsToDisplay}
          />
      )
    }
    
    return <div className='PokeDetails'>
      <div className='PokeName'>
        { this.props.pokeName }
      </div>
      <div className='PokeSkills' >
        { pokeDetails }
      </div>
    </div>
  }
}

export default PokeDetails
