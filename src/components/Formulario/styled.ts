import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 24px 0;
`

export const Campo = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
`

export const Botao = styled.button`
  padding: 10px;
  border: none;
  border-radius: 6px;
  background-color: #2ecc71;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s;

  &:hover{
    background-color: #53e38f;
  }
`
