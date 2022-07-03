import ButtonMatricula from '../ButtonMatricula/buttonMatricula'
import style from './style.module.scss'

export default function Header(){
  return(
    <>
      <header className={style.componetHeader}>

        <div className="container">
          <img src="./images/logo.png" alt="" />
          <nav>

            <ul>
              <li><a href="">Cursos</a></li>
              <li><a href="">Ensino</a></li>
              <li><a href="">Testemunho</a></li>
              <li><a href="">Blog</a></li>
              <ButtonMatricula />
            </ul>
            
          </nav>
        </div>
        
      </header>
    </>
  )
}