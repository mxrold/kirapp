import ReactDOM from 'react-dom'
import { ContainerModal } from './styles'

export const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <ContainerModal>
      {children}
    </ContainerModal>,
    document.getElementById('modal')
  )
} 