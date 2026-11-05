import styled, {createGlobalStyle} from 'styled-components'

export const EsiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    list-style: none;
  }

  body: {
    background-color: #f5f5f5;
  }
`

export const Container = styled.main`
  max-width: 640px;
  margin: 0 auto;
  padding: 24px 16px;
`
