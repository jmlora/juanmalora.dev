import styles from './resume-body.module.scss'
import CareerResume from './CareerResume'
import ProfessionalExperience from './ProfessionalExperience'
import ExtraInfo from './ExtraInfo'

function ResumeBody() {
  return (
    <div className={styles.container}>
      <div className={styles.careerResumeContainer}>
        <CareerResume />
      </div>
      <div className={styles.mainInfoContainer}>
        <div className={styles.professionalExperienceContainer}>
          <ProfessionalExperience />
        </div>
        <div className={styles.extraInfoContainer}>
          <ExtraInfo />
        </div>
      </div>
    </div>
  )
}

export default ResumeBody
