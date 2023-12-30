import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Colors } from '../../global/styles'
import { Props } from '.'

const BaseStyleButton = css<Props>`
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? Colors.green : Colors.white)};
  color: ${Colors.white};
  background-color: ${(props) =>
    props.variant === 'primary' ? Colors.green : 'transparent'};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`

export const ButtonContainer = styled.button<Props>`
  ${BaseStyleButton}
  cursor: pointer;
`

export const ButtonLink = styled(Link)<Props>`
  ${BaseStyleButton}
  text-decoration: none;
`
