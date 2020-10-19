import styles from './job-position-technologies.module.scss'
import JobPositionSubtitle from '../JobPositionSubtitle'

function JobPositionTechonologies({ technologies = [] }) {
  return (
    <div>
      <JobPositionSubtitle text="Tecnologías usadas" />
      <ul className={styles.listContainer}>
        {technologies.map(technology => (
          <li className={styles.listItem}>
            <span className={styles.badge}>{technology}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JobPositionTechonologies
