import { Button } from '../Button'
import { 
  Main, 
  Section, 
  List, 
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
import { Colors } from '../../styles/Colors'
import { FiCheckSquare, FiTrash } from 'react-icons/fi'

export const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: 'A beautiful title',
      description: 'This is a new task',
      date: '01 Oct',
      category: '💡 Technology',
      completed: true
    },
    {
      id: 2,
      title: 'A beautiful title',
      description: 'This is a new task',
      date: '01 Oct',
      category: '💡 Technology',
      completed: false
    },
    {
      id: 3,
      title: 'A beautiful title',
      description: 'This is a new task',
      date: '01 Oct',
      category: '💡 Technology',
      completed: false
    },
    {
      id: 4,
      title: 'A beautiful title',
      description: 'This is a new task',
      date: '01 Oct',
      category: '💡 Technology',
      completed: false
    },
    {
      id: 5,
      title: 'A beautiful title',
      description: 'This is a new task',
      date: '01 Oct',
      category: '💡 Technology',
      completed: false
    },
    {
      id: 6,
      title: 'A beautiful title',
      description: 'This is a new task',
      date: '01 Oct',
      category: '💡 Technology',
      completed: false
    },
    {
      id: 7,
      title: 'A beautiful title',
      description: 'This is a new task',
      date: '01 Oct',
      category: '💡 Technology',
      completed: false
    },
    {
      id: 8,
      title: 'A beautiful title',
      description: 'This is a new task',
      date: '01 Oct',
      category: '💡 Technology',
      completed: false
    }
  ]
 
  return (
    <Main>
      <Section>
        <List>
          <Button 
            name='New task'
            width='width: 50%; min-width: 300px; max-width: 520px'
            height='45px'
            bgColor={Colors.darkPurple}
            textColor={Colors.lightGray}
          />
          {
            tasks.map(item => (
              <Card key={item.id} status={item.completed} >
                <DivTop>
                  <div>
                    <Title>{item.title}</Title>
                    <Description>{item.description}</Description>
                  </div>
                  <ContainerDate>
                    <Date>{item.date}</Date>
                  </ContainerDate>
                </DivTop>
                <DivBottom>
                  <div>
                    <Category>{item.category}</Category>
                  </div>
                  <Actions>
                    <BtnAction hover='#29BB89' status={item.completed}>
                      <FiCheckSquare size='20px'/>
                    </BtnAction>
                    <BtnAction hover='#F8485E'>
                      <FiTrash size='20px'/>
                    </BtnAction>
                  </Actions>
                </DivBottom>
              </Card>
            ))
          }
        </List>
      </Section>
    </Main>
  )
}