import styled from 'styled-components'
import { Breakpoints, Colors } from '../../global/styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive?: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: flex-end;
  gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};

  @media (max-width: ${Breakpoints.tablet}) {
    display: block;
    margin-top: 16px;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    width: 100%;
    background-color: ${Colors.white};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${Colors.white};

    &.error {
      border: 1px solid red;
    }
  }

  @media (max-width: ${Breakpoints.tablet}) {
    margin-top: 16px;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  height: 32px;
  border: none;
  border-radius: 8px;
  margin-right: 16px;
  padding: 0 8px;
  font-size: 14px;
  font-weight: 700;
  color: ${Colors.white};
  background-color: ${(props) =>
    props.isActive ? Colors.green : Colors.black};
  cursor: pointer;

  img {
    width: 16px;
    height: 13px;
    margin-right: 8px;
  }

  @media (max-width: ${Breakpoints.tablet}) {
    margin-top: 8px;
    width: 100%;
  }
`
