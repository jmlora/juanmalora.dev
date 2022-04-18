import { Children } from 'react'
import styles from './extra-info.module.scss'
import Skills from './Skills'
import Education from './Education'
import Interests from './Interests'
import Languages from './Languages'

function ExtraInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Skills />
        <Education />
        <Languages />
        <Interests />
      </div>
    </div>
  )
}

export default ExtraInfo
