import { useSelector } from "react-redux"
import type { RootState } from "../../store"

const ListaDeContatos = () => {
  const contatos = useSelector((state: RootState) => state.contatos.itens)

  if (contatos.length === 0) return <p> Nenhum Contato Adicionado</p>

  return (
    <ul>
      {contatos.map((contato) => (
        <li key={contato.id}>
          <strong>{contato.nome}</strong>
          <span>{contato.email}</span>
          <span>{contato.telefone}</span>
        </li>
      ))}
    </ul>
  )
}

export default ListaDeContatos
