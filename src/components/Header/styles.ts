import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 32px 16px;
`

export const HeaderContent = styled.div`
  max-width: 70rem;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 12px;
`

interface ActionButtonProps {
  variant: 'purple' | 'yellow'
}

export const ActionButton = styled.button<ActionButtonProps>`
  padding: 8px;
  border: 0;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  ${(props) => css`
    background: ${props.theme[`brand-${props.variant}-light`]};
    color: ${props.theme[`brand-${props.variant}-dark`]};
    svg {
      color: ${props.variant === 'purple' && props.theme['brand-purple']};
    }
  `}
`
