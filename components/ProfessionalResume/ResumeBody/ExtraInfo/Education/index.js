import SectionContainer from 'components/SectionContainer'
import EducationItem from './EducationItem'

function Education() {
  return (
    <SectionContainer title="Educación">
      <EducationItem
        degree="Ingeniería en Informática"
        organization="Universidad de Córdoba"
        period="2007 - 2010"
      />
      <EducationItem
        degree="Ingeniería Técnica en Informática de Sistemas"
        organization="Universidad de Córdoba"
        period="2001 - 2007"
      />
    </SectionContainer>
  )
}

export default Education
