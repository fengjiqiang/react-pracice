import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends PureComponent {
  // 对接收的props进行类型/必要性限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

  handleKeyUp = (event) => {
    const { keyCode, target } = event
    if (keyCode !== 13) return
    if (target.value.trim() === '') return
    const todoObj = {
      id: nanoid(),
      name: target.value,
      done: false,
    }
    // 将todoObj传给App
    this.props.addTodo(todoObj)
    // 清空输入
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
