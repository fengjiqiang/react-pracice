import React, { PureComponent } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends PureComponent {
  render() {
    const { todos } = this.props
    return (
      <ul className="todo-main">
        {
          todos.map((todo) => <Item key={todo.id} {...todo} />)
        }
      </ul>
    )
  }
}
