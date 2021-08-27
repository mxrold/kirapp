import { Button } from '../Button'
import { Article } from './styles'

export const ListOfCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'category-1'
    },
    {
      id: 2,
      name: 'category-2'
    },
    {
      id: 3,
      name: 'category-3'
    },
    {
      id: 4,
      name: 'category-4'
    },
    {
      id: 5,
      name: 'category-5'
    },
    {
      id: 6,
      name: 'category-6'
    },
    {
      id: 7,
      name: 'category-7'
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
          />
        ))
      }
    </Article>
  )
}