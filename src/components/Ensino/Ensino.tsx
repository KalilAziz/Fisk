import styles from './styles.module.scss';
export default function Ensino(){
  return(
    <div className="container">
      <div className={styles.div}>

        <h1>Ensino</h1>
        <div className={styles.conteudos}>



          <div className={styles.card}>
            <img src="/images/msg.png" alt="" />
            <div className={styles.conteudo}>
                <span>Formação de conversação</span>
                <h1>Dialogo com um tutor</h1>
                <p>
                  Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI
                </p>
              </div>
          </div>

          <div className={styles.card}>
            <img src="/images/monitor.png" alt="" />
            <div className={styles.conteudo}>
                <span>Seções de tutorial One-to-One</span>
                <h1>Suporte Personalizado</h1>
                <p>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI
                </p>
              </div>
          </div>

          <div className={styles.card}>
            <img src="/images/grafico.png" alt="" />
            <div className={styles.conteudo}>
                <span>Painel de controle</span>
                <h1>Acompanhe seu progresso</h1>
                <p>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI
                </p>
              </div>
          </div>

          <div className={styles.card}>
            <img src="/images/drive.png" alt="" />
            <div className={styles.conteudo}>
                <span>Pergunte a um tutor</span>
                <h1>Obtenha respostas dos especialistas</h1>
                <p>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI
                </p>
              </div>
          </div>
        </div>
        </div>
    </div>
  )
}