import { Container, SubContainer, Logo, Div, Button } from "./styles"
import { FiSearch } from 'react-icons/fi'

export const Header = () => {
  return (
    <Container>
      <SubContainer>
        <Logo>Todo.</Logo>
        <Div>
          <Button>
            <FiSearch size='20px' />
          </Button>
        </Div>
      </SubContainer>
    </Container>
  )
}