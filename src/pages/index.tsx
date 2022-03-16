import { Question } from '../components/Question'
import styles from '../styles/Home.module.scss'

export default function Home (){
  return(
    <>
    <main className={styles.questionBox}>
      <img src="illustration-box-desktop.svg" alt="Caixa online" className={styles.boxDesktop} />
      <div className={styles.questions}>
        <div className={styles.imgBackground}>
        <img src="illustration-woman-online-desktop.svg" alt="Mulher online" />
        </div>
        <div className={styles.shadowImage}>

        </div>
      <Question></Question>
      
        

      </div>
    </main>
    </>
  )
}