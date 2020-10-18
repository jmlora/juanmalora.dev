import styles from './global-container.module.css'

function GlobalContainer({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  )
}

export default GlobalContainer
