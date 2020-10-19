import styles from './education-item.module.scss'

function EducationItem({ degree, organization, period }) {
  return (
    <div className={styles.container}>
      <div className={styles.degree}>{degree}</div>
      <div className={styles.organization}>{organization}</div>
      <div className={styles.period}>{period}</div>
    </div>
  )
}

export default EducationItem
