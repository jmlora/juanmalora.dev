import { Children } from 'react'
import styles from './extra-info.module.scss'

function ExtraInfo({ children }) {
  return <div className={styles.container}>{children}</div>
}

export default ExtraInfo
