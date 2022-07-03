import ButtonMatricula from '../ButtonMatricula/buttonMatricula'
import styles from './styles.module.scss'

export default function Footer() {
  return(
    <>
      <div className={styles.title}>
        <h1>Quer ganhar o mundo? Fale a língua dele! Faça inglês na Fisk.</h1>
        <div className={styles.button}>
          <ButtonMatricula />
        </div>
      </div>
  
    <div className={styles.background}>
      <div className="container">
       

        <footer className={styles.footer}>
            <div className={styles.contato}>
              <div>
                <h3>A Fisk</h3>
                <ul>
                  <li><a href="">Quem somos</a></li>
                  <li><a href="">Unidade</a></li>
                  <li><a href="">Seja um franqueado</a></li>
                  <li><a href="">Trabalhe Conosco</a></li>
                  <li><a href="">Blog</a></li>
                  <li><a href="">Convivênios</a></li>
                  <li><a href="">Dúvidas Frequentes</a></li>
                </ul>
              </div>
              <div>
                <h3>Contato</h3>
                <ul>
                  <li><a href="">Cursos</a></li>
                  <li><a href="">Inglês</a></li>
                  <li><a href="">Espanhol</a></li>
                  <li><a href="">Português</a></li>
                  <li><a href="">Informática</a></li>
                </ul>
              </div>
              <div>
                <h3>Especialização</h3>
                <ul>
                  <li><a href="">Teste de classificação</a></li>
                  <li><a href="">Certificações</a></li>
                  <li><a href="">Intercâmbio e viagens</a></li>
                </ul>
              </div>
              <div>
                <h3>Área privativa</h3>
                <ul>
                  <li><a href="">Alunos</a></li>
                  <li><a href="">Franqueados</a></li>
                </ul>
                </div>
              <div>
                <h3>Receba as últimas novidades</h3>
                <form action="">
                  <input type="email" placeholder='Seu e-mail' />
                  <button type="submit" value="">Assinar</button>
                </form>
              </div>
            </div>
            <div className={styles.redesSociais}>
              <h3>Siga a Fisk</h3>
              <div className={styles.icons}>
                  <div className={styles.icon}></div>
                  <div className={styles.icon}></div>
                  <div className={styles.icon}></div>
                  <div className={styles.icon}></div>
              </div>
            </div>
            <div className={styles.endereco}>
              <p>
                Administração 0800 773 3475 Av.lins de Vasconcelos, 2.294 - São Paulo - SP - CEP 04112-011
              </p>
              <p>Copyright 2017 Fisk - Todos os direitos reservados</p>
            </div>
        </footer>

      </div>
    </div>
    </>
  )
}