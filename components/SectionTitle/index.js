import styles from './section-title.module.scss'

function SectionTitle({ children }) {
  return <h2 className={styles.container}>{children}</h2>
}

export default SectionTitle
