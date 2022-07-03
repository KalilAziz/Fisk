import styles from './styles.module.scss';

export default function Testemunhos(){
  return(
    <>
      <h1 className={styles.title}>Testemunhos</h1>
      <div className={styles.testemunhas}>
        <div className={styles.testemunha}>
            <img src="/images/testemunhas1.webp" alt="" />
            <h3>Laura Smith</h3>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI
            </p>
        </div>
        <div className={styles.testemunha}>
            <img src="/images/testemunhas2.jpeg" alt="" />
            <h3>Grupo de amigos</h3>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI
            </p>
        </div>
        <div className={styles.testemunha}>
          <img src="/images/testemunhas3.jpeg" alt="" />
          <h3>André Garfield</h3>
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI
          </p>
        </div>
      </div>
    </>
  )
}