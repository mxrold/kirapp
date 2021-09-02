import { useViewportWidth } from '../../hooks/useViewportWidth'
import { Search } from '../Search'
import { Container, SubContainer, Logo, Div } from "./styles"

export const Header = ({ searchValue, setSearchValue }) => {
  const { isMobile } = useViewportWidth(480)

  const logo = { 
    small: 'https://i.ibb.co/d7P39V0/logo-small.png',
    large: 'https://i.ibb.co/Vp0cB7h/logo-large.png'
  }

  return (
    <Container>
      <SubContainer>
        <Logo src={isMobile ? logo.large : logo.small} alt="Logo Kirapp" />
        <Div>
          <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
        </Div>
      </SubContainer>
    </Container>
  )
}