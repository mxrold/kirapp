import { categories } from '../../api/categories'
import { Button } from '../Button'
import { Article } from './styles'

export const ListOfCategories = () => {  
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