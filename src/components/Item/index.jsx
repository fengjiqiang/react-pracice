/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { PureComponent } from 'react'
import './index.css'

export default class Item extends PureComponent {
  render() {
    const { name, done } = this.props
    return (
      <li>
        <label>
          <input type="checkbox" defaultChecked={done} />
          <span>{name}</span>
        </label>
        <button type="button" className="btn btn-danger" style={{ display: 'none' }}>删除</button>
      </li>
    )
  }
}
