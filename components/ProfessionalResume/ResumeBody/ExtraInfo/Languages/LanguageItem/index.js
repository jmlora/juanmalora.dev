import styles from './language-item.module.scss'

function LanguageItem({ lang, level }) {
  return (
    <div className={styles.container}>
      <div className={styles.lang}>{lang}</div>
      <div className={styles.level}>({level})</div>
    </div>
  )
}

export default LanguageItem
