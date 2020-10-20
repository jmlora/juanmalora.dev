import styles from './skills-group.module.scss'

function SkillsGroup({ title, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.items}>{children}</div>
    </div>
  )
}

export default SkillsGroup
