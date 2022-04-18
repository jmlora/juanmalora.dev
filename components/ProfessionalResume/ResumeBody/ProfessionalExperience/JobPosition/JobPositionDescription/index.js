import styles from './job-position-description.module.scss'

function JobPositionDescription({ descriptions = [] }) {
  return (
    <div>
      {descriptions.map((description, index) => (
        <p key={index} className={styles.description}>
          {description}
        </p>
      ))}
    </div>
  )
}

export default JobPositionDescription
