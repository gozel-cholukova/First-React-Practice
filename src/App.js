import React from 'react'
import TodoList from './ToDo/TodoList'

function App() {
  const todos = [
    {id: 1 , completed: false, title: 'bread'},
    {id: 2 , completed: false, title: 'oil'},
    {id: 3 , completed: false, title: 'milk'},
  ]
  return (
    <div className='wrapper'>
      <h1>React Tutorial</h1>

      <TodoList todos={todos}></TodoList>

    </div>
  )
}

export default App;
