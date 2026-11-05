import Formulario from "./components/Formulario"
import ListaDeContatos from "./components/ListaDeContatos"
import { Container, EsiloGlobal } from "./styles"

function App() {

  return (
    <>
    <EsiloGlobal />
    <Container>
    <h1>Lista de Contatos</h1>
    <Formulario />
    <ListaDeContatos />
    </Container>
    </>
  )
}

export default App
