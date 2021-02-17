import React, { Component } from 'react'

export default class TemperatureInput extends Component {
  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const { temperature, scale } = this.props
    const scaleNames = {
      c: 'Celsius',
      f: 'Fahrenheit',
    }
    return (
      <fieldset>
        <legend>
          Enter temperature in
          {' '}
          {scaleNames[scale]}
          :
        </legend>
        <input
          value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}
