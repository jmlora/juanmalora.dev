import styles from './global-container.module.scss'

function GlobalContainer({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  )
}

export default GlobalContainer
