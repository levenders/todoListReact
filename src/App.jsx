import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const removeTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const resetTodoHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodoHandler = () => {
    const filteredTodos = todos.filter((todo) => !todo.isCompleted)
    setTodos(filteredTodos)
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

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
