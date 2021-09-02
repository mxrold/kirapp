import { Btn } from './styles'

export const Button = (props) => {
  const { onClick, name, width, height, marginR, bgColor, textColor } = props
  
  return (
    <Btn
      onClick={onClick && onClick}
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
    
