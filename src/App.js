import { useState, useMemo } from 'react'
import { GlobalStyles } from "./styles/GlobalStyles"
import { Header } from "./components/Header"
import { SubHeader } from "./components/SubHeader"
import { Tasks } from "./components/Tasks"
import { tasks } from './initialState'

export const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const listTasks = tasks

  const filteredTasks = useMemo(() => 
    listTasks.filter((item) => {
      return item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.date.toLowerCase().includes(searchValue.toLowerCase())
    }),
    [listTasks, searchValue]
  )

  return (
    <>
      <GlobalStyles />
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <SubHeader />
      <Tasks tasks={filteredTasks} />
    </>
  )
}