import styles from './skill-item.module.scss'

function SkillItem({ text, value }) {
  return (
    <div className={styles.container}>
      <div className={styles.text}>{text}</div>
      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: value + '%' }}></div>
      </div>
    </div>
  )
}

export default SkillItem
