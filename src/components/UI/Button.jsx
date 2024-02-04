import styles from './Button.module.css'

function Button(props) {
  const { children, disabled = false } = props

  return (
    <button className={styles.button} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
