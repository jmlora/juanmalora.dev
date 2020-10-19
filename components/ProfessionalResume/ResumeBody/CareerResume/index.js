import styles from './career-resume.module.scss'
import ResumeTitle from '../ResumeBodyTitle'
import ResumeBodyParagraph from '../ResumeBodyParagraph'

function CareerResume() {
  return (
    <div className={styles.container}>
      <ResumeTitle>RESUMEN</ResumeTitle>
      <ResumeBodyParagraph>
        Después de iniciarme como programador con becas y prácticas, trabajé como profesor de
        Informática de Educación Secundaria Obligatoria. Volví al mundo de la programación en 2013
        cuando me concedieron una beca del Ministerio de Educación, lo que me abrió las puertas a
        avanzar en mi carrera como programador: full stack en los comienzos con Symfony y AngularJS
        y, desde 2017, especializado en frontend con React y React Native.
      </ResumeBodyParagraph>
    </div>
  )
}

export default CareerResume
