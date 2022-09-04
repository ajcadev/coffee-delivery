import styled from 'styled-components'
import backgroundImg from '../../../../assets/background.svg'

export const HeroContainer = styled.div`
  padding: 0 16px;
  background: ${() => `url(${backgroundImg}) no-repeat center`};
  background-size: cover;
`

export const HeroContent = styled.div`
  max-width: 70rem;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ItemsContainer = styled.div`
  margin-top: 66px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  column-gap: 40px;
`
