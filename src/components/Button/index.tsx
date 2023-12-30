import * as S from './styles'

export type Props = {
  kind: 'button' | 'link'
  variant?: 'primary' | 'secondary'
  type?: string
  title: string
  to?: string
  children: string
  onClick?: () => void
}

const Button = ({
  title,
  children,
  kind,
  type,
  to,
  variant = 'primary',
  onClick
}: Props) => {
  if (kind === 'button') {
    return (
      <S.ButtonContainer
        variant={variant}
        title={title}
        onClick={onClick}
        type={type}
        kind="button"
      >
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink to={to as string} title={title} variant={variant} kind="link">
      {children}
    </S.ButtonLink>
  )
}

export default Button
