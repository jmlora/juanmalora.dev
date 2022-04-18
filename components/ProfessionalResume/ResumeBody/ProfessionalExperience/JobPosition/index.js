import styles from './job-position.module.scss'
import JobPositionTitle from './JobPositionTitle'
import JobPositionDescription from './JobPositionDescription'
import JobPositionAchieves from './JobPositionAchieves'
import JobPositionTechnologies from './JobPositionTechnologies'

function JobPosition({ jobInfo }) {
  return (
    <div className={styles.container}>
      <JobPositionTitle
        title={jobInfo.title}
        company={jobInfo.company}
        positionTime={jobInfo.positionTime}
      />
      <JobPositionDescription descriptions={jobInfo.description} />
      <JobPositionAchieves achieves={jobInfo.achieves} />
      <JobPositionTechnologies technologies={jobInfo.technologies} />
    </div>
  )
}

export default JobPosition
