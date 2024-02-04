import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const removeTodoHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id)
    setTodos(filteredTodos)
  }

  const resetTodoHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodoHandler = () => {
    const filteredTodos = todos.filter((todo) => !todo.isCompleted)
    setTodos(filteredTodos)
  }

  const toggleTodoHandler = (id) => {
    const draft = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }
    )
    setTodos(draft)
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    if (localStorage.getItem('todos') !== null) {
      setTodos(JSON.parse(localStorage.getItem('todos')))
    } else {
      localStorage.setItem('todos', JSON.stringify([]))
    }
  }, [])

  return (
    <div className="App">
      <h1>Напоминания</h1>
      <TodoForm addTodo={addTodoHandler}>
        {!!todos.length && (
          <TodosActions
            resetTodo={resetTodoHandler}
            deleteCompletedTodo={deleteCompletedTodoHandler}
            completedTodosExist={!!completedTodosCount}
          />
        )}
      </TodoForm>

      <TodoList
        todos={todos}
        removeTodo={removeTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {!!completedTodosCount && (
        <h3>{`У вас ${
          completedTodosCount > 1
            ? completedTodosCount + ' выполненных напоминаний'
            : completedTodosCount + ' выполненное напоминание'
        } `}</h3>
      )}
    </div>
  )
}

export default App
