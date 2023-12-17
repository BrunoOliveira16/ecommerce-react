import styled from 'styled-components'
import { Colors } from '../../global/styles'

export const Container = styled.div`
  border-radius: 8px;
  background-color: ${Colors.gray};
  color: ${Colors.white};
  padding: 24px;
  margin-bottom: 40px;

  h2,
  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  .margin-top {
    margin-top: 24px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`
