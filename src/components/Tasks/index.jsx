import { ListOfTasks } from '../ListOfTasks'
import { Main } from './styles'

export const Tasks = ({ tasks }) => {
  return (
    <Main>
      <ListOfTasks tasks={tasks} />
    </Main>
  )
}