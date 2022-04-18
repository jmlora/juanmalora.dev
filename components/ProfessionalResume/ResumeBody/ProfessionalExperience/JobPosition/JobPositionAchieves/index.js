import styles from './job-position-achieves.module.scss'
import JobPositionSubtitle from '../JobPositionSubtitle'

function JobPositionAchieves({ achieves = [] }) {
  return (
    <div>
      <JobPositionSubtitle text="Logros:" />
      <ul className={styles.listContainer}>
        {achieves.map((achieve, index) => (
          <li key={index} className={styles.listItem}>
            {achieve}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JobPositionAchieves
