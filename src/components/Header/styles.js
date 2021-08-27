import styled from "styled-components"
import { Colors } from '../../styles/Colors'

export const Container = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${Colors.mediumPurple};
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

export const Logo = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${Colors.darkGray};
`

export const Div = styled.div`

`

export const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${Colors.lightPurple};
  border-radius: 7px;
  border: none;
  outline: none;
  cursor: pointer;
  & svg {
    color: ${Colors.darkPurple};
  }
`