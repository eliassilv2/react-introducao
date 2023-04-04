import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap'
import Cabecalho from '../components/Cabecalho'
import Pagina from '../components/Pagina';
import Rodape from '../components/Rodape'


const pagina2 = () => {

    return (
      <>
      <Pagina titulo='Página 2'>
        </Pagina>

      <Rodape />  
      </>
    )
}

export default pagina2