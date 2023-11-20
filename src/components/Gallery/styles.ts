import styled from 'styled-components'
import { Colors } from '../../global/styles'

export const Itens = styled.ul`
  display: flex;
  gap: 16px;
`

export const Item = styled.li`
  img {
    border: 2px solid ${Colors.white};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`
