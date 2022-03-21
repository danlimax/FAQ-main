
import Head from 'next/head'
import { Question } from '../components/Question'
import styles from '../styles/Home.module.scss'



export default function Home (){
  
  return(
    <>
    <Head>
      <title>Home | FAQ</title>
    </Head>
    <main className={styles.questionBox}>
      <img src="illustration-box-desktop.svg" alt="Caixa online" className={styles.boxDesktop} />
      <div className={styles.questions}>
        <div className={styles.imgBackground}>
        <img src="illustration-woman-online-desktop.svg" className={styles.womanDesktop} alt="Mulher online" />
        <img src="illustration-woman-online-mobile.svg" className={styles.womanMobile} alt="Mulher online mobile" />
        <img src="bg-pattern-mobile.svg" className={styles.shadowMobile} alt="Sombra da mulher mobile" />
        </div>
      <Question></Question>
      
        

      </div>
    </main>
    </>
  )
}