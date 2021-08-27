import { Btn } from './styles'

export const Button = ({ name, width, height }) => {
  console.log('desde button', height)

  return (
    <Btn width={width && width} height={height && height} >
      {name}
    </Btn>
  )
}
    
