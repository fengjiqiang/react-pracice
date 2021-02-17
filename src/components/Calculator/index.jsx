import React, { Component } from 'react'
import TemperatureInput from '../TemperatureInput'
import BoilingVerdict from '../BoilingVerdict'

export default class Calculator extends Component {
  // 如果一个类方法没有使用this，它有时可以变成一个静态函数
  static tryConvert(temperature, convert) {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
      return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
  }

  static toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9
  }

  static toFahrenheit = (celsius) => ((celsius * 9) / 5) + 32

  state = {
    temperature: '',
    scale: 'c',
  }

  handleCelsiusChange = (temperature) => {
    this.setState({ scale: 'c', temperature })
  }

  handleFahrenheitChange = (temperature) => {
    this.setState({ scale: 'f', temperature })
  }

  render() {
    const { scale, temperature } = this.state
    const celsius = scale === 'f' ? Calculator.tryConvert(temperature, Calculator.toCelsius) : temperature
    const fahrenheit = scale === 'c' ? Calculator.tryConvert(temperature, Calculator.toFahrenheit) : temperature

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict
          celsius={parseFloat(celsius)}
        />
      </div>
    )
  }
}
