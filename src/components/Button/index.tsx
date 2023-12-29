import * as S from './styles'

export type Props = {
  kind: 'button' | 'link'
  type?: string
  title: string
  to?: string
  children: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Button = ({
  title,
  children,
  kind,
  type,
  to,
  onClick,
  variant = 'primary'
}: Props) => {
  if (kind === 'button') {
    return (
      <S.ButtonContainer
        variant={variant}
        kind="button"
        title={title}
        onClick={onClick}
        type={type}
      >
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
