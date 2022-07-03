import ConteudoDahs from '../ConteudoDahs'
import Header from '../Header/Header'
import { Login   } from '../Login'
import styles from './styles.module.scss'

export function Dashboard(){
  return(

    <div className={styles.background}>

      <div className={styles.container}>
        <Login />  
        <ConteudoDahs />  
        <Header />
      </div>
    

    </div>
  )
}