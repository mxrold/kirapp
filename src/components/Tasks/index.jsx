import { useState } from 'react'
import { ListOfTasks } from '../ListOfTasks'
import { Main } from './styles'

export const Tasks = ({ tasks = [] }) => {
  const [listTasks, setListTasks] = useState(tasks)
  const newTasks = listTasks.filter(item => !item.completed)

  const completedTasks = listTasks.filter(item => item.completed)
  const completedLength = completedTasks.length > 0

  return (
    <Main col={completedTasks}>
      <ListOfTasks tasks={newTasks} listTasks={listTasks} setListTasks={setListTasks} />
      {completedLength && <ListOfTasks tasks={completedTasks} completed={completedLength} listTasks={listTasks} setListTasks={setListTasks} />}
    </Main>
  )
}