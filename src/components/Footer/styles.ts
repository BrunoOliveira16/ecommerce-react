import styled from 'styled-components'
import { Colors } from '../../global/styles'

export const Container = styled.footer`
  background-color: ${Colors.gray};
  padding: 32px 0;
  font-size: 14px;
`

export const SectionTitle = styled.h4`
  color: ${Colors.white};
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`

export const Link = styled.a`
  color: ${Colors.lightGray};
  text-decoration: none;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
