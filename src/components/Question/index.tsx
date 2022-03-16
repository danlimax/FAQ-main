import styles from './styles.module.scss';

export function Question(){
    return(
        <>
        <div className={styles.questionComponents}>
        <h1>FAQ</h1>

        <div className={styles.questionFlow}>
        <span>Qual é a pergunta?<img src="icon-arrow-down.svg" alt="Seta de interação." /></span>
        {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p> */}
        </div>
        <div className={styles.questionFlow}>
        <span>Qual é a pergunta?<img src="icon-arrow-down.svg" alt="Seta de interação." /></span>
        {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p> */}
        </div>
        <div className={styles.questionFlow}>
        <span>Qual é a pergunta?<img src="icon-arrow-down.svg" alt="Seta de interação." /></span>
        {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p> */}
        </div>
        <div className={styles.questionFlow}>
        <span>Qual é a pergunta?<img src="icon-arrow-down.svg" alt="Seta de interação." /></span>
        {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p> */}
        </div>
        </div>
        </>
    )
}