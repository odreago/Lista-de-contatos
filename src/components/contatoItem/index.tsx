import { useState } from "react"
import { useDispatch } from "react-redux"
import type { Contato } from "../../models/Contato"
import { editar, remover } from "../../store/reducers/contatos"
import * as S from './styled'

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

          <S.Card>

          <S.CampoEdicao
          value={nomeEditando}
          onChange={(e) => setNomeEditando(e.target.value)}/>
          <S.CampoEdicao
          value={emailEditando}
          onChange={(e) => setEmailEditando(e.target.value)}/>
          <S.CampoEdicao
          value={telefoneEditando}
          onChange={(e) => setTelefoneEditando(e.target.value)} />
          <S.Espaco>
          <S.BotaoSalvar type="button" onClick={salvar}>
            Salvar
          </S.BotaoSalvar>
          <S.BotaoVermelho type="button" onClick={cancelar}>
            Cancelar
          </S.BotaoVermelho>
          </S.Espaco>
          </S.Card>
        </>
      ) : (
        <>
          <S.Card>
          <strong>{nome}</strong>
          <S.Inform>{email}</S.Inform>
          <S.Inform>{telefone}</S.Inform>
          <S.Acoes>
          <S.BotaoEditar type="button" onClick={() => setEstaEditando(true)}>
            Editar
          </S.BotaoEditar>
          <S.BotaoVermelho type="button" onClick={() => dispatch(remover(id))}>
            Remover
          </S.BotaoVermelho>
          </S.Acoes>
          </S.Card>
        </>
      )}
    </li>
  )
}

export default ContatoItem
