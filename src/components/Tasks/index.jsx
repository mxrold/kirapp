import { useState } from 'react'
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm'
import { ListOfTasks } from '../ListOfTasks'
import { Main } from './styles'

export const Tasks = ({ tasks = [] }) => {
  const [listTasks, setListTasks] = useState(tasks)
  const [openModal, setOpenModal] = useState(false)

  const newTasks = listTasks.filter(item => !item.completed)
  const newTasksLength = newTasks.length < 1

  const completedTasks = listTasks.filter(item => item.completed)
  const completedLength = completedTasks.length > 0

  return (
    <>
    <Main col={completedTasks} emptyNewTasks={newTasksLength}>
      <ListOfTasks onClick={() => setOpenModal(true)} tasks={newTasks} emptyNewTasks={newTasksLength} listTasks={listTasks} setListTasks={setListTasks} />
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
    {
      openModal &&
        <Modal>
        <TodoForm setOpenModal={setOpenModal}/>
      </Modal>
    }
  </>
  )
}