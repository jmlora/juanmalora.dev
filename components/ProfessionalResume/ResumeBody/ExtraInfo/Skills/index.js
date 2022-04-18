import SectionContainer from 'components/SectionContainer'
import SkillItem from './SkillItem'
import SkillsGroup from './SkillsGroup'

function Skills() {
  return (
    <SectionContainer title="Skills">
      <SkillsGroup title="Frontend">
        <SkillItem text="React" value="85" />
        <SkillItem text="React Native" value="85" />
        <SkillItem text="Redux" value="85" />
        <SkillItem text="HTML/SASS" value="95" />
      </SkillsGroup>
      <SkillsGroup title="Backend">
        <SkillItem text="Symfony" value="65" />
        <SkillItem text="MySQL" value="70" />
      </SkillsGroup>
    </SectionContainer>
  )
}

export default Skills
