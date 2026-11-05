import { useState } from "react"
import type { FormEvent } from "react"
import { useDispatch } from "react-redux"
import { adicionar } from "../../store/reducers/contatos"
import * as S from './styled'

const Formulario = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const Cadastrar = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    dispatch(adicionar({ nome, email, telefone}))
    setNome('')
    setTelefone('')
    setEmail('')
  }

  return (
    <S.Form onSubmit={Cadastrar}>
      <S.Campo type="text"
      value={nome}
      onChange={(e) => setNome(e.target.value)}
      placeholder="Nome do contato"
      required/>
      <S.Campo type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      required/>
      <S.Campo type="tel"
      value={telefone}
      onChange={(e) => setTelefone(e.target.value)}
      placeholder="Telefone"
      required/>
      <S.Botao type="submit">Adicionar</S.Botao>
    </S.Form>
  )
}

export default Formulario
