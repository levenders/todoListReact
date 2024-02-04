import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodosActions.module.css'

function TodosActions({ resetTodo, deleteCompletedTodo, completedTodosExist }) {
  return (
    <div className={styles.todoActionsContainer}>
      <Button title="Сброс всех напоминаний" onClick={resetTodo}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Удалить все завершенные напоминания"
        onClick={deleteCompletedTodo}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosActions
