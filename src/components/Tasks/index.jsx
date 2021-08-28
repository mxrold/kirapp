import { ListOfTasks } from '../ListOfTasks'
import { Main } from './styles'

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
      <ListOfTasks tasks={tasks} />
    </Main>
  )
}