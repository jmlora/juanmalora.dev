import styles from './resume-body-paragraph.module.scss'

function ResumebodyParagraph({ children }) {
  return <p className={styles.container}>{children}</p>
}

export default ResumebodyParagraph
