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

export const TaskItem = (props) => {
  const { id, completed, title, description, date, category, onComplete, onDelete } = props
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
          <BtnAction onClick={onComplete} hover='#29BB89' status={completed}>
            <FiCheckSquare size='20px'/>
          </BtnAction>
          <BtnAction onClick={onDelete} hover='#F8485E'>
            <FiTrash size='20px'/>
          </BtnAction>
        </Actions>
      </DivBottom>
    </Card>
  )
}