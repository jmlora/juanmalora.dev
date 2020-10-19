import SectionContainer from 'components/SectionContainer'
import InterestItem from './InterestItem'

function Interests() {
  return (
    <SectionContainer title="Intereses">
      <InterestItem text="Inteligencia Artificial" />
      <InterestItem text="DevOps" />
      <InterestItem text="Inversiones y Bolsa" />
    </SectionContainer>
  )
}

export default Interests
