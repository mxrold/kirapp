import { Search } from '../Search'
import { Container, SubContainer, Logo, Div } from "./styles"

export const Header = ({ searchValue, setSearchValue }) => {
  return (
    <Container>
      <SubContainer>
        <Logo>Todo.</Logo>
        <Div>
          <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
        </Div>
      </SubContainer>
    </Container>
  )
}