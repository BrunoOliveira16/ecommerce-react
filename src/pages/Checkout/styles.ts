import styled from 'styled-components'
import { Colors } from '../../global/styles'

export const Row = styled.div`
  display: flex;
  gap: 24px;
`

export const InputGroup = styled.div`
  flex: auto;

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    width: 100%;
    background-color: ${Colors.white};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${Colors.white};
  }
`
