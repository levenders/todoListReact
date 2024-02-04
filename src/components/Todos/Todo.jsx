import { RiCircleLine, RiCloseFill } from 'react-icons/ri'
import styles from './Todo.module.css'

function Todo({ todo, removeTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiCircleLine
        title="Отметить выполненное напоминание"
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
      <div className={styles.todoText}>{todo.text}</div>
      <RiCloseFill
        title="Удалить напоминание"
        className={styles.deleteIcon}
        onClick={() => removeTodo(todo.id)}
      />
    </div>
  )
}

export default Todo
