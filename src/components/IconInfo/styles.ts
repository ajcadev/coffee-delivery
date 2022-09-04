import styled from 'styled-components'

interface IconInfoContainerProps {
  bgIcon: string
}

export const IconInfoContainer = styled.div<IconInfoContainerProps>`
  min-width: 32px;
  min-height: 32px;
  border-radius: 50%;
  background: ${(props) => props.bgIcon};
  color: ${(props) => props.theme['base-background']};
  padding: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`
