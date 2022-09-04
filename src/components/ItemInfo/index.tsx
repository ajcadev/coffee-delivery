import { ReactNode } from 'react'
import { IconInfo } from '../IconInfo'
import { ItemInfoContainer } from './styles'

interface ItemInfoProps {
  icon: ReactNode
  bgIcon: string
  description: string
}

export function ItemInfo({ icon, bgIcon, description }: ItemInfoProps) {
  return (
    <ItemInfoContainer>
      <IconInfo icon={icon} bgIcon={bgIcon} />
      <span>{description}</span>
    </ItemInfoContainer>
  )
}
