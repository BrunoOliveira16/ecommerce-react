import styled from 'styled-components'
import { Props } from '.'
import { Colors } from '../../global/styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? Colors.black : Colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? Colors.gray : Colors.black};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
