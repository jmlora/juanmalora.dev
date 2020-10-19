import styles from './professional-experience.module.scss'
import ResumeBodyTitle from '../ResumeBodyTitle'
import JobPosition from './JobPosition'
import jobsData from './professional-experience.data'

function ProfessionalExperience() {
  return (
    <div className={styles.container}>
      <ResumeBodyTitle>Experiencia Profesional</ResumeBodyTitle>
      <div className={styles.jobPositionsContainer}>
        {jobsData.map((job, index) => (
          <JobPosition key={index} jobInfo={job} />
        ))}
      </div>
    </div>
  )
}

export default ProfessionalExperience
