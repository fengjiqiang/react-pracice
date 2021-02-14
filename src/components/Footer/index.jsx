/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { PureComponent } from 'react'
import './index.css'

export default class Footer extends PureComponent {
  render() {
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>已完成0</span>
          {' '}
          / 全部2
        </span>
        <button type="button" className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
