import styles from './job-position-title.module.scss'

function JobPositionTitle({ title, company, positionTime }) {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.company}>{company}</div>
      </div>
      <div className={styles.positionTime}>{positionTime}</div>
    </div>
  )
}

export default JobPositionTitle
