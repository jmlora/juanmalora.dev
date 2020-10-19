import styles from './interest-item.module.scss'

function InterestItem({ text }) {
  return <div className={styles.container}>{text}</div>
}

export default InterestItem
