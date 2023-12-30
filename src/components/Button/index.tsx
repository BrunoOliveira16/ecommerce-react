import * as S from './styles'

export type Props = {
  kind: 'button' | 'link'
  variant?: 'primary' | 'secondary'
  type?: string
  title: string
  to?: string
  children: string
  disabled?: boolean
  onClick?: () => void
}

const Button = ({
  title,
  children,
  kind,
  type,
  to,
  variant = 'primary',
  disabled,
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
        disabled={disabled}
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
