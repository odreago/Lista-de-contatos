import { useSelector } from "react-redux"
import type { RootState } from "../../store"
import ContatoItem from "../contatoItem"

const ListaDeContatos = () => {
  const contatos = useSelector((state: RootState) => state.contatos.itens)

  if (contatos.length === 0) return <p> Nenhum Contato Adicionado</p>

  return (
    <ul>
      {contatos.map((contato) => (
          <ContatoItem key={contato.id} {...contato} />
      ))}
    </ul>
  )
}

export default ListaDeContatos
