import styles from './personal-info.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function PersonalInfo() {
  return (
    <div className={styles.info}>
      <h1 className={styles.name}>Juanma Lora</h1>
      <h2 className={styles.description}>Full Stack Developer - Team Lead</h2>
      <a className={styles.contactEmail} href="mailto:contact@juanmalora.dev">
        <FontAwesomeIcon icon={faEnvelope} />
        <span className={styles.emailText}>contact@juanmalora.dev</span>
      </a>
    </div>
  )
}

export default PersonalInfo
