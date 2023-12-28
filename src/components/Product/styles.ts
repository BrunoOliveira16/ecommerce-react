import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Colors } from '../../global/styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled(Link)`
  background-color: ${Colors.gray};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  text-decoration: none;
  color: ${Colors.white};
  display: block;
  height: 100%;

  img {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: fill;
  }

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

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
