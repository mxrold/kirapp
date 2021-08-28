import { Button } from '../Button'
import { Article } from './styles'

export const ListOfCategories = () => {
  const categories = [
    {
      id: 1,
      name: '🛒 Category'
    },
    {
      id: 2,
      name: '🛒 Category'
    },
    {
      id: 3,
      name: '🛒 Category'
    },
    {
      id: 4,
      name: '🛒 Category'
    },
    {
      id: 5,
      name: '🛒 Category'
    },
    {
      id: 6,
      name: '🛒 Category'
    },
    {
      id: 7,
      name: '🛒 Category'
    }
  ]
  
  return (
    <Article>
      {
        categories.map(item => (
          <Button 
            key={item.id} 
            {...item}
            height='30px'
            marginR='14px'
          />
        ))
      }
    </Article>
  )
}