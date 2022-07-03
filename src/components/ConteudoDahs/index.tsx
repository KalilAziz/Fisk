import ButtonMatricula from '../ButtonMatricula/buttonMatricula'
import ButtonSaibaMais from '../ButtonSaibaMais/buttonSaibaMais'
import styles from './styles.module.scss'

export default function ConteudoDahs(){
  return(
    <div>
      
        <div className={styles.conteudo}>

          <div className="container">
            <h1>Esteja pronto para as oportunidades</h1>
            <p>
              Moderno e com qualidade disk, é o curso ideal para iniciantes, crianças e adultos que desejam aprender de forma mais rápida e objetiva.
            </p>
            <ul>
              <li>Curso de Inglês em 18 meses</li>
              <li>Intercâmbio e viagens</li>
              <li>Teste de Classificação</li>
            </ul>
          </div>

        </div>
        

        <div className={styles.buttons}>.
          <div className="container">
            <ButtonMatricula />
            <ButtonSaibaMais />   
          </div> 
        </div>

    </div>
  )
}