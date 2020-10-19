import styles from './section-container.module.scss'
import SectionTitle from 'components/SectionTitle'

function SectionContainer({ title, children }) {
  return (
    <section className={styles.container}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </section>
  )
}

export default SectionContainer
