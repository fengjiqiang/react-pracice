import React, { Component } from 'react'

export default class BoilingVerdict extends Component {
  render() {
    const { celsius } = this.props
    return (
      <div>
        {celsius >= 100
          ? <p>The water would boil.</p>
          : <p>The water would not boil.</p>}
      </div>
    )
  }
}
