import styles from './social-links.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function SocialLinks() {
  return (
    <div className={styles.socialLinkContainer}>
      <div className={styles.socialLink}>
        <FontAwesomeIcon className={styles.icon} icon={faLinkedin} size="lg" />
        <a href="https://linkedin.com/in/juanmalora" target="_blank">
          linkedin.com/in/juanmalora
        </a>
      </div>
      <div className={styles.socialLink}>
        <FontAwesomeIcon className={styles.icon} icon={faGithubSquare} size="lg" />
        <a href="https://github.com/jmlora" target="_blank">
          github.com/jmlora
        </a>
      </div>
    </div>
  )
}

export default SocialLinks
