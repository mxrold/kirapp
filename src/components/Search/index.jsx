import { useState } from 'react'
import { useViewportWidth } from '../../hooks/useViewportWidth'
import { FiSearch } from 'react-icons/fi'
import { Input, Button } from "./styles"

export const Search = ({ searchValue, setSearchValue }) => {
  const [showInput, setShowInput] = useState(false)
  const { isMobile } = useViewportWidth(480)

  const handleShowInput = () => isMobile === false ? setShowInput(!showInput) : setShowInput(false)

  const handleSearchValue = event => setSearchValue(event.target.value)

  return (
    <>
      <Input
        show={isMobile}
        open={showInput}
        type="text" 
        placeholder="Search tasks" 
        value={searchValue}
        onChange={handleSearchValue}
      />
      <Button onClick={handleShowInput} >
        <FiSearch size='20px' />
      </Button>
    </>
  )
}