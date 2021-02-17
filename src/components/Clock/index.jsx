import React, { Component } from 'react'

export default class Clock extends Component {
  state = {
    date: new Date(),
  }

  /**
   * componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行
   */
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  /**
   * 在 componentWillUnmount() 生命周期方法中清除计时器
   */
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  /**
   * Clock 组件每秒(1000ms)都会调用它
   * Clock 组件会通过调用 setState() 来计划进行一次 UI 更新
   */
  tick() {
    this.setState({ date: new Date() })
  }

  render() {
    const { date } = this.state
    return (
      <div>
        <h2>
          现在是
          {date.toLocaleTimeString()}
        </h2>
      </div>
    )
  }
}
