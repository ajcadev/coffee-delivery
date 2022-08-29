import {
  ActionButton,
  ActionsContainer,
  HeaderContainer,
  HeaderContent,
} from './styles'
import logoImg from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <ActionsContainer>
          <ActionButton variant="purple">
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </ActionButton>
          <ActionButton variant="yellow">
            <ShoppingCart size={22} weight="fill" />
          </ActionButton>
        </ActionsContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
