import { 
  Card, 
  DivTop,
  Title,
  Description,
  ContainerDate,
  Date,
  Category,
  Actions,
  BtnAction,
  DivBottom 
} from './styles'
import { FiCheckSquare, FiTrash } from 'react-icons/fi'

export const TaskItem = ({ id, completed, title, description, date, category }) => {
  return (
    <Card status={completed} >
      <DivTop>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
        <ContainerDate>
          <Date>{date}</Date>
        </ContainerDate>
      </DivTop>
      <DivBottom>
        <div>
          <Category>{category}</Category>
        </div>
        <Actions>
          <BtnAction hover='#29BB89' status={completed}>
            <FiCheckSquare size='20px'/>
          </BtnAction>
          <BtnAction hover='#F8485E'>
            <FiTrash size='20px'/>
          </BtnAction>
        </Actions>
      </DivBottom>
    </Card>
  )
}