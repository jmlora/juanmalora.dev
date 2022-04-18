import styles from './languages.module.scss'
import SectionContainer from 'components/SectionContainer'
import LanguageItem from './LanguageItem'

function Languages() {
  return (
    <SectionContainer title="Idiomas">
      <LanguageItem lang="Inglés" level="B1+" />
      <LanguageItem lang="Castellano" level="Nativo" />
    </SectionContainer>
  )
}

export default Languages
