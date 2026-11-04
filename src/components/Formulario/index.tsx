import { useState } from "react"
import type { FormEvent } from "react"
import { useDispatch } from "react-redux"
import { adicionar } from "../../store/reducers/contatos"

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
    <form onSubmit={Cadastrar}>
      <input type="text"
      value={nome}
      onChange={(e) => setNome(e.target.value)}
      placeholder="Nome do contato"
      required/>
      <input type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      required/>
      <input type="tel"
      value={telefone}
      onChange={(e) => setTelefone(e.target.value)}
      placeholder="Telefone"
      required/>
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default Formulario
