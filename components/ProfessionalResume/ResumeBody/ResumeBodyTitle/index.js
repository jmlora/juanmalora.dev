import styles from './resume-body-title.module.scss'

function ResumeBodyTitle({ children }) {
  return <h2 className={styles.container}>{children}</h2>
}

export default ResumeBodyTitle
