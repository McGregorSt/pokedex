import React, { Component } from 'react'

import './PokeStats.css'

class PokeStats extends Component {
  render() {
    const stats = this.props.statsClicked
    const displayDetails = this.props.displayDetails.map((detail) => {
      if (stats === 'abilities') {
        return <li>{detail.ability.name}</li>
      } else if (stats === 'stats') {
        return (
          <li>
            {detail.stat.name}: {detail.base_stat} pts
          </li>
        )
      }
    })

    return (
      <div className="PokeStats">
        <div className="PokeStats__header">{stats.toUpperCase()}</div>
        <ul className="PokeStats__list">{displayDetails}</ul>
      </div>
    )
  }
}

export default PokeStats
