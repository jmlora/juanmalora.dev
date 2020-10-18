import styles from './profile-picture.module.scss'

function ProfilePicture() {
  return (
    <div className={styles.imageContainer}>
      <img src="assets/images/juanma-profile.webp" className={styles.profilePicture} />
    </div>
  )
}

export default ProfilePicture
