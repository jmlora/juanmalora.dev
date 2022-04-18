import styles from './professional-experience.module.scss'
import JobPosition from './JobPosition'
import jobsData from './professional-experience.data'
import SectionContainer from 'components/SectionContainer'

function ProfessionalExperience() {
  return (
    <SectionContainer title="Experiencia Profesional">
      <div className={styles.jobPositionsContainer}>
        {jobsData.map((job, index) => (
          <JobPosition key={index} jobInfo={job} />
        ))}
      </div>
    </SectionContainer>
  )
}

export default ProfessionalExperience
