import styled from 'styled-components'
import { Colors } from '../../styles/Colors'

export const Container = styled.section`
  width: 100%;
  height: 60px;
  background-color: ${Colors.white};
  box-shadow: 0 2px 3px 1px ${Colors.shadow};
`

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
`

export const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 15%;
`

export const LayoutBtn = styled.button`
  width: 34px;
  height: 34px;
  background-color: transparent;
  border-radius: 7px;
  color: ${Colors.mediumGray};
  &:hover {
    background-color: ${Colors.lightGray};
    border: 1px solid rgba(0, 0, 0, .1);
  }
  
`