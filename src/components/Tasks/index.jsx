import { ListOfTasks } from '../ListOfTasks'
import { Main } from './styles'

export const Tasks = ({ tasks = [] }) => {
  const newTasks = tasks.filter(item => !item.completed)
  const newTasksLength = newTasks.length > 0

  const completedTasks = tasks.filter(item => item.completed)
  const completedLength = completedTasks.length > 0

  return (
    <Main col={completedTasks}>
      <ListOfTasks tasks={newTasks} newTasksLength={newTasksLength} />
      {completedLength && <ListOfTasks tasks={completedTasks} completed={completedLength} />}
    </Main>
  )
}