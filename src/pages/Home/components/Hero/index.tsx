import {
  HeroContainer,
  HeroContent,
  ItemsContainer,
  TitleContainer,
} from './styles'
import coffeeImg from '../../../../assets/coffee.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { ItemInfo } from '../../../../components/ItemInfo'
export function Hero() {
  const theme = useTheme()
  return (
    <HeroContainer>
      <HeroContent>
        <div>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </TitleContainer>
          <ItemsContainer>
            <ItemInfo
              icon={<ShoppingCart weight="fill" />}
              bgIcon={theme['brand-yellow-dark']}
              description="Compra simples e segura"
            />
            <ItemInfo
              icon={<Package weight="fill" />}
              bgIcon={theme['base-text']}
              description="Embalagem mantém o café intacto"
            />
            <ItemInfo
              icon={<Timer weight="fill" />}
              bgIcon={theme['brand-yellow']}
              description="Entrega rápida e rastreada"
            />
            <ItemInfo
              icon={<Coffee weight="fill" />}
              bgIcon={theme['brand-purple']}
              description="O café chega fresquinho até você"
            />
          </ItemsContainer>
        </div>
        <img src={coffeeImg} alt="" />
      </HeroContent>
    </HeroContainer>
  )
}
