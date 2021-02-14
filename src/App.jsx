// 创建“外壳”组件App
import React, { Component } from 'react'
import './App.css'
// import Hello from './components/Hello'
// import Welcome from './components/Welcome'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

// 创建并暴露App组件
export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '打代码', done: false },
      { id: '003', name: '睡觉', done: true },
    ],
  }

  addTodo = (todoObj) => {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state
    return (
      // <div>
      //   <Hello />
      //   <Welcome />
      // </div>
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    )
  }
}
