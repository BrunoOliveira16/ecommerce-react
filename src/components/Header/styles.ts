import styled from 'styled-components'
import { Colors } from '../../global/styles'

export const HeaderBar = styled.header`
  background-color: ${Colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${Colors.white};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    gap: 40px;
  }
`

export const Links = styled.ul`
  display: flex;
  gap: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const CartButton = styled.a`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }
`
