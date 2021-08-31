import { Btn } from './styles'

export const Button = ({ name, width, height, marginR, bgColor, textColor }) => {
  return (
    <Btn
      width={width && width} 
      height={height && height} 
      marginR={marginR && marginR}
      bgColor={bgColor && bgColor} 
      textColor={textColor && textColor} 
    >
      {name}
    </Btn>
  )
}
    
