import { createGlobalStyle } from 'styled-components'

export const Colors = {
  white: '#EEEEEE',
  black: '#111111',
  gray: '#333333',
  lightGray: '#A3A3A3',
  green: '#10AC84'
}

export const Breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: ${Colors.black};
        color: ${Colors.white};
        padding-top: 40px;
    }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;

      @media (max-width: ${Breakpoints.desktop}) {
        max-width: 80%;
      }
    }
`
