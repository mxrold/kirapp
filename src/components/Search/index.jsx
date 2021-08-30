import { useState, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'
import { Input, Button } from "./styles"

export const Search = ({ searchValue, setSearchValue }) => {
  const [isMobile, setIsMobile] = useState(() => {
    if (window.innerWidth > 480) {
      return true
    } else {
      return false
    }
  })
  const [showInput, setShowInput] = useState(false)

  useEffect(() => {
    const handleResize = () => window.innerWidth > 480 ? setIsMobile(true) : setIsMobile(false)

    window.addEventListener('resize', handleResize)
  })

  const handleShowInput = () => {
    isMobile === false ? setShowInput(!showInput) : setShowInput(false)
  }

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