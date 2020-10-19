import styles from './job-position-description.module.scss'

function JobPositionDescription({ descriptions = [] }) {
  return (
    <div>
      {descriptions.map(description => (
        <p className={styles.description}>{description}</p>
      ))}
    </div>
  )
}

export default JobPositionDescription
