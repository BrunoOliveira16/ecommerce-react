import styled, { createGlobalStyle } from 'styled-components'

export const Colors = {
  white: '#EEEEEE',
  black: '#111111',
  gray: '#333333',
  green: '#10AC84'
}

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: ${Colors.black};
        color: ${Colors.white};
        padding-top: 40px;
    }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
