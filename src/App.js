import React, { useEffect } from 'react'
import TodoList from './ToDo/TodoList'
import Context from './context'
import AddTodo from './AddTodo'

function App() {
  const [todos, setTodos] = React.useState ([
    {id: 1 , completed: false, title: 'bread'},
    {id: 2 , completed: true, title: 'oil'},
    {id: 3 , completed: false, title: 'milk'},
  ])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTodos(todos)
      })
  }, [])
  
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

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }
  
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1>React Tutorial</h1>
        <AddTodo onCreate={addTodo}></AddTodo>
        {todos.length ? (
          <TodoList 
          todos={todos}
          onToggle={toggleTodo}>
          </TodoList>
        ) : (
          <p>No todos!</p> 
        )}        
      </div>
    </Context.Provider>
  )
}

export default App
