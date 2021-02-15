/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { PureComponent } from 'react'
import './index.css'

export default class Item extends PureComponent {
  state = { mouse: false } // 标识鼠标移入/移出

  /**
   * 鼠标移入/移出 回调
   * @param {Boolean} flag
   */
  handleMouse = (flag) => () => {
    this.setState({ mouse: flag })
  }

  /**
   * 勾选/取消勾选 回调
   * @param {*} id
   */
  handleCheck = (id) => (event) => {
    this.props.updateTodo(id, event.target.checked)
  }

  handleDelete = (id) => {
    this.props.deleteTodo(id)
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={() => { this.handleDelete(id) }} type="button" className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
