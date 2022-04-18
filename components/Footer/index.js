import styles from './footer.module.scss'

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          Designed by{' '}
          <a href="https://themes.3rdwavemedia.com" target="_blank">
            Xiaoying Riley
          </a>{' '}
          for developers
        </div>
        <div className={styles.sslPictureContainer}>
          <img
            src="assets/images/positivessl_trust_seal_sm_124x32.webp"
            className={styles.profilePicture}
          />
          <script
            language="JavaScript"
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
            TrustLogo("https://www.juanmalora.dev/assets/images/positivessl_trust_seal_sm_124x32.webp",
            "CL1", "none");
          `
            }}
          ></script>
        </div>
      </div>
    </footer>
  )
}

export default Footer
