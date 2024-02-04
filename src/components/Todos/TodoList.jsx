import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Добавьте новое напоминание</h2>}
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
