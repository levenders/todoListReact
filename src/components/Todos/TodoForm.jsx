import { RiAddLine } from 'react-icons/ri'
import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

function TodoForm({ addTodo, children }) {
  const [text, setText] = useState('')

  function onSubmitHandler(event) {
    event.preventDefault()
    text && addTodo(text)
    setText('')
  }

  return (
    <form className={styles.todoFormContainer} onSubmit={onSubmitHandler}>
      <div className={styles.container}>
        <input
          placeholder="Новое напоминание"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          type="submit"
          title="Добавить новое напоминание"
          disabled={!text.length > 0}
        >
          <RiAddLine />
        </Button>
        {children}
      </div>
    </form>
  )
}

export default TodoForm
