import { ListOfCategories } from '../ListOfCategories'
import { Container, SubContainer, Div, LayoutBtn } from './styles'
import { FiColumns } from "react-icons/fi"

export const SubHeader = () => {  
  return (
    <Container>
      <SubContainer>
        <ListOfCategories />
        <Div>
          <LayoutBtn>
            <FiColumns size='24px' />
          </LayoutBtn>
        </Div>
      </SubContainer>
    </Container>
  )
}