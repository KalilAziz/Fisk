import styles from './styles.module.scss';
export default function Noticias(){
  return(
    <div class="container">
      <div className={styles.noticia}>
            
            <div className={styles.conteudo}>
              <span>Dinâmica de Conversação</span>
              <h1>Inglês em 18 meses</h1>
              <p>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
              </p>
            </div>

            <div className={styles.imagem}>
                <div className={styles.image1}>

                </div>
            </div>

          </div>

          <div className={styles.noticia}>

            <div className={styles.imagem}>
                <div className={styles.image2}>

                </div>
            </div>
            
            <div className={styles.conteudo}>
              <span>Aprender na Fisk é sempre especial</span>
              <h1>Nosso principal objetivo</h1>
              <p>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
              </p>
            </div>

            

          </div>

          <div className={styles.noticia}>
            
            <div className={styles.conteudo}>
              <span>Ferramentas interativas</span>
              <h1>Nossas tecnologias</h1>
              <p>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
              </p>
            </div>

            <div className={styles.imagem}>
                <div className={styles.image3}>
                </div>
            </div>

          </div>
    </div>
  )
}