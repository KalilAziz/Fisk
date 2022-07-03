import styles from './styles.module.scss'

export function Login(){
  return(
    <header className={styles.headerContainer}>
        <div className="container">
          <img className={styles.logo} src="/images/logo.png" alt="Logo"/>
          <nav>
            <ul>
              <li className={styles.entrar}><a href="">Entrar</a></li>
              <span>|</span>
              <li><a href="">Suporte</a></li>
            </ul>
          </nav>
        </div>
    </header>
  )
}