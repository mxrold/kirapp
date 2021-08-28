import { Search } from '../Search'
import { Container, SubContainer, Logo, Div } from "./styles"

export const Header = () => {
  return (
    <Container>
      <SubContainer>
        <Logo>Todo.</Logo>
        <Div>
          <Search />
        </Div>
      </SubContainer>
    </Container>
  )
}