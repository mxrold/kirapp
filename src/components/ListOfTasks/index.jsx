import { Button } from '../Button'
import { TaskItem } from '../TaskItem'
import { Section, List } from './styles'
import { Colors } from '../../styles/Colors'

export const ListOfTasks = ({ tasks, emptyNewTasks, completed, listTasks, setListTasks }) => {
  const handleCompleteTodo = id => {
    const todoIndex = listTasks.findIndex(todo => todo.id === id)
    const newTodos = [...listTasks]
    const statusTodo = newTodos[todoIndex].completed
    newTodos[todoIndex].completed = !statusTodo
    setListTasks(newTodos)
  }

  const handleDeleteTodo = id => {
    const todoIndex = listTasks.findIndex(todo => todo.id === id)
    const newTodos = [...listTasks]
    alert('Do you want to delete this todo?', newTodos.splice(todoIndex, 1))
    setListTasks(newTodos)
  }

  const handleStylesButton = (completeTask, newTask) => completed ? completeTask : newTask

  return (
    <Section layout={emptyNewTasks}>
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
            <TaskItem 
              key={item.id} 
              {...item} 
              onComplete={() => handleCompleteTodo(item.id)}
              onDelete={() => handleDeleteTodo(item.id)}
            />
          ))
        }
      </List>
    </Section>
  )
}