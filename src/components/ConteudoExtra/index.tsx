import styles from './styles.module.scss'
export default function ConteudoExtra(){
  return(
    <div className="container">
      <h1 className={styles.title}>Aguarde, há mais!</h1>

      <div className={styles.cards}>
        <div className={styles.conteudos}>
          <div className={styles.conteudo}>
              <span>Aprender na Fisk é sempre especial</span>
              <h1>Nosso principal objetivo</h1>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
            </p>
          </div>
          <img src="/images/conteudoExtra1.png" alt="" />
        </div>


        <div className={styles.conteudos}>
          <img src="/images/conteudoExtra2.webp" alt="" />
          <div className={styles.conteudo}>
              <span>Aprender na Fisk é sempre especial</span>
              <h1>Nosso principal objetivo</h1>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
            </p>
          </div>
        </div>


        <div className={styles.conteudos}>
          <div className={styles.conteudo}>
              <span>Aprender na Fisk é sempre especial</span>
              <h1>Nosso principal objetivo</h1>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
            </p>
          </div>
          <img src="/images/conteudoExtra3.jpeg" alt="" />
        </div>
      </div>
    </div>
  )
}