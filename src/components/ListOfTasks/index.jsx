import { Button } from '../Button'
import { TaskItem } from '../TaskItem'
import { Section, List } from './styles'
import { Colors } from '../../styles/Colors'

export const ListOfTasks = ({ tasks }) => {
  return (
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
            <TaskItem key={item.id} {...item} />
          ))
        }
      </List>
    </Section>
  )
}