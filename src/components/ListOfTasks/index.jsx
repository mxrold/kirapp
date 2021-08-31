import { Button } from '../Button'
import { TaskItem } from '../TaskItem'
import { Section, List } from './styles'
import { Colors } from '../../styles/Colors'

export const ListOfTasks = ({ tasks, completed }) => {

  const handleStylesButton = (completeTask, newTask) => completed ? completeTask : newTask

  return (
    <Section layout={completed}>
      <List>
        <Button 
          name={handleStylesButton(`Completed (${tasks.length})`, 'New task')}
          width='width: 50%; min-width: 300px; max-width: 520px'
          height='45px'
          bgColor={handleStylesButton(Colors.lightPurple, Colors.darkPurple)}
          textColor={handleStylesButton(Colors.darkPurple, Colors.lightGray)}
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