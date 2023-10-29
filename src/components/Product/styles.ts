import styled from 'styled-components'
import { Colors } from '../../global/styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${Colors.gray};
  border-radius: 8px;
  padding: 8px;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  font-size 16px;
  font-weight: bold;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
