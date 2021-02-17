// 创建“外壳”组件App
import React, { Component } from 'react'
import './App.css'
// import Hello from './components/Hello'
// import Welcome from './components/Welcome'
import Clock from './components/Clock'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

// 创建并暴露App组件
export default class App extends Component {
  // 状态在哪里，操作状态的方法在哪里
  // 初始化状态
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '打代码', done: false },
      { id: '003', name: '睡觉', done: true },
    ],
  }

  /**
   * 添加todo
   * @param {Object} todoObj
   */
  addTodo = (todoObj) => {
    // 获取原todo
    const { todos } = this.state
    // 追加一个todo
    const newTodos = [todoObj, ...todos]
    // 更新状态
    this.setState({ todos: newTodos })
  }

  /**
   * 更新todo对象
   * @param {*} id
   * @param {*} done
   */
  updateTodo = (id, done) => {
    // 获取状态中的todos
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, done }
      }
      return todoObj
    })
    this.setState({ todos: newTodos })
  }

  /**
   * 删除todo
   * @param {*} id
   */
  deleteTodo = (id) => {
    // 获取状态中的todos
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) => todoObj.id !== id)
    this.setState({ todos: newTodos })
  }

  /**
   * 全选/取消全选
   */
  checkAllTodo = (done) => {
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => ({ ...todoObj, done }))
    this.setState({ todos: newTodos })
  }

  /**
   * 清除所有已完成的todo
   */
  clearAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) => !todoObj.done)
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
        <div>
          <Clock />
        </div>
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    )
  }
}
