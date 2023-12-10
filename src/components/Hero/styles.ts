import styled from 'styled-components'
import { Breakpoints, Colors } from '../../global/styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  display: block;
  height: 480px;
  width: 100%;
  position: relative;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  padding-top: 16px;

  &::after {
    content: '';
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.56;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  @media (max-width: ${Breakpoints.tablet}) {
    background-size: cover;
  }
`

export const Infos = styled.div`
  max-width: 290px;
  padding: 16px;
  background-color: ${Colors.black};
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;
  }

  span {
    display: block;
    text-decoration: line-through;
  }
`
