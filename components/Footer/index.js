import styles from './footer.module.scss'

function Footer() {
  return (
    <footer>
      <div className={styles.content}>
        Designed by{' '}
        <a href="https://themes.3rdwavemedia.com" target="_blank">
          Xiaoying Riley
        </a>{' '}
        for developers
      </div>
    </footer>
  )
}

export default Footer
