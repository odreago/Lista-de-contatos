import { useState } from "react"
import { useDispatch } from "react-redux"
import type { Contato } from "../../models/Contato"
import { editar, remover } from "../../store/reducers/contatos"

type Props = Contato

const ContatoItem = ({ id, nome, email, telefone}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nomeEditando, setNomeEditando] = useState(nome)
  const [emailEditando, setEmailEditando] = useState(email)
  const [telefoneEditando, setTelefoneEditando] = useState(telefone)

  const salvar = () => {
    dispatch(
      editar({
        id,
        nome: nomeEditando,
        email: emailEditando,
        telefone: telefoneEditando
      })
    )
    setEstaEditando(false)
  }

  const cancelar = () => {
    setNomeEditando(nome)
    setEmailEditando(email)
    setTelefoneEditando(telefone)
    setEstaEditando(false)
  }

  return (
    <li>
      {estaEditando ? (
        <>
          <input
          value={nomeEditando}
          onChange={(e) => setNomeEditando(e.target.value)}/>
          <input
          value={emailEditando}
          onChange={(e) => setEmailEditando(e.target.value)}/>
          <input
          value={telefoneEditando}
          onChange={(e) => setTelefoneEditando(e.target.value)} />
          <button type="button" onClick={salvar}>
            Salvar
          </button>
          <button type="button" onClick={cancelar}>
            Cancelar
          </button>
        </>
      ) : (
        <>
          <strong>{nome}</strong>
          <span>{email}</span>
          <span>{telefone}</span>
          <button type="button" onClick={() => setEstaEditando(true)}>
            Editar
          </button>
          <button type="button" onClick={() => dispatch(remover(id))}>
            Remover
          </button>
        </>
      )}
    </li>
  )
}

export default ContatoItem
