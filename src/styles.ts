import styled, { createGlobalStyle } from 'styled-components'

const StyleGlobal = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lato, sans-serif;
  list-style: none;
  }

  body {
    padding-bottom: 120px;
  }

`
export default StyleGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`

export const VariablesColor = {
  mainColor: '#a7727d',
  secondaryColor: '#f9f5e7'
}
