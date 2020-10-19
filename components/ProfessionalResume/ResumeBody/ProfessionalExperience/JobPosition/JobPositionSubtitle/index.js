import styles from './job-position-subtitle.module.scss'

function JobPositionSubtitle({ text }) {
  return <h4 className={styles.subtitle}>{text}</h4>
}

export default JobPositionSubtitle
