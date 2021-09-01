import { useState } from 'react'
import { ListOfTasks } from '../ListOfTasks'
import { Main } from './styles'

export const Tasks = ({ tasks = [] }) => {
  const [listTasks, setListTasks] = useState(tasks)
  const newTasks = listTasks.filter(item => !item.completed)
  const newTasksLength = newTasks.length < 1

  const completedTasks = listTasks.filter(item => item.completed)
  const completedLength = completedTasks.length > 0

  return (
    <Main col={completedTasks} emptyNewTasks={newTasksLength}>
      <ListOfTasks tasks={newTasks} emptyNewTasks={newTasksLength} listTasks={listTasks} setListTasks={setListTasks} />
      {
        completedLength && 
          <ListOfTasks 
            tasks={completedTasks} 
            completed={completedLength} 
            emptyNewTasks={newTasksLength} 
            listTasks={listTasks} 
            setListTasks={setListTasks} 
          />
      }
    </Main>
  )
}