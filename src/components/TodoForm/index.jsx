import { useState } from 'react'
import { categories } from '../../api/categories'
import { Form, 
DivTitle,
H3, 
Span,
DivForm, 
ContainerLabel,
Label, 
TextCounter,
Input, 
Textarea,
DivButton, 
Button } from './styles'
import { FiClipboard } from 'react-icons/fi'

export const TodoForm = ({ setOpenModal }) => {
  const [len, setLen] = useState('')

  const valueInput = (event) => {
    setLen(event.target.value)
  } 

  const onHandleCancel = () => {
    setOpenModal(prevState => !prevState)
  }

  const onHandleAdd = (e) => {
    e.preventDefault()
  }

  return (
    <Form>
      <DivTitle>
        <H3>Add a new task</H3>
        <Span><FiClipboard size="30px" /></Span>
      </DivTitle>
      <DivForm>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" autoComplete="off" placeholder="Go to supermarket..." />

        <ContainerLabel>
          <Label htmlFor="description">Description</Label>
          <TextCounter>{len.length}/240</TextCounter>
        </ContainerLabel>
        <Textarea id="description" onChange={valueInput} placeholder="Buy food for the night..." maxLength="240" />

        <Label htmlFor="select">What category is your new task?</Label>
        <Input list="categories" id="select" placeholder="Select a category"/>
        <datalist id="categories">
          {
            categories.map(category => (
              <option key={category.id} value={category.name} />
            ))
          }
        </datalist>
      </DivForm>
      <DivButton>
        <Button type="button" onClick={onHandleCancel} cancel={true}>Cancel</Button>
        <Button type="submit" onClick={onHandleAdd} add={true}>Add task</Button>
      </DivButton>
    </Form>
  )
}