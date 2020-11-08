import React from 'react'
import TodoList from './ToDo/TodoList'

function App() {
  const [todos, setTodos] = React.useState ([
    {id: 1 , completed: false, title: 'bread'},
    {id: 2 , completed: false, title: 'oil'},
    {id: 3 , completed: false, title: 'milk'},
  ])
  
  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo 
      })
    )
  }
  
  return (
    <div className='wrapper'>
      <h1>React Tutorial</h1>

      <TodoList 
      todos={todos}
      onToggle={toggleTodo}>

      </TodoList>

    </div>
  )
}

export default App;
