import Noticias from '../Noticias/Noticias';
import Ensino from '../Ensino/Ensino';
import Testemunhos from '../Testemunhos';
import ConteudoExtra from '../ConteudoExtra';
import Footer from '../Footer';

export default function Main(){
  return(
    <>

          
          <Noticias /> 
          <hr />
          <Ensino />
          <hr />
          <Testemunhos />
          <hr />
          <ConteudoExtra />
          <hr />
          <Footer />

    </>
  )
}