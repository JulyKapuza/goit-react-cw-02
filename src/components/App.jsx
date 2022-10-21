import React from 'react';
import { Component } from 'react';
import Counter from './Counter';
import Dropdown from './Dropdown';

import ColorPicker from './ColorPiker';

import TodoList from './TodoList/TodoList';
import initialTodos from '../todolist.json'

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component{
  state = {
    todos: initialTodos,

  };
  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo =>todo.id !== todoId),
    }))
  };
  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;

    const completedTodosCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
    
    return (
      <>
        <Counter />
      <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <div>
          <p>Total: { totalTodoCount}</p>
          <p>Done:{completedTodosCount} </p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    )
  }
}

export default App;