import { ReactNode } from 'react'
import { IconInfoContainer } from './styles'

interface IconInfoProps {
  icon: ReactNode
  bgIcon: string
}

export function IconInfo({ icon, bgIcon }: IconInfoProps) {
  return <IconInfoContainer bgIcon={bgIcon}>{icon}</IconInfoContainer>
}
