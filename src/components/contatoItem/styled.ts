import styled from "styled-components";
import { Botao } from "../Formulario/styled";

export const BotaoEditar = styled(Botao)`
  background-color: #000;
  padding: 5px;
  font-weight: 100;
  margin-right: 8px;

    &:hover{
      background-color: #0591bc;
    }
`
export const BotaoVermelho = styled(Botao)`
  background-color: #ce0606;
  padding: 5px;
  font-weight: 100;

    &:hover{
      background-color: #e43636;
    }
`
export const BotaoSalvar = styled(BotaoEditar)`
  background-color: #2ecc71;
  margin-right: 8px;

    &:hover{
      background-color: #53e38f;
    }
`

export const Card = styled.div`
  border: 1px solid #000;
  border-radius: 8px;
  padding: 8px;
  background-color: #ebeaea;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  margin-bottom: 36px;
`
export const Inform = styled.span`
  display: block;
`

export const Acoes = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const Espaco = styled(Acoes)`
    margin-top: 36px;
  `

export const CampoEdicao = styled.input`
  padding: 4px;
  margin-right: 8px;
`
