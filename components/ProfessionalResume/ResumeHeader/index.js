import styles from './header.module.scss'
import SocialLinks from './components/SocialLinks'
import PersonalInfo from './components/PersonalInfo'
import ProfilePicture from './components/ProfilePicture'

function Header() {
  return (
    <div className={styles.container}>
      <ProfilePicture />
      <div className={styles.infoContainer}>
        <PersonalInfo />
        <SocialLinks />
      </div>
    </div>
  )
}

export default Header
