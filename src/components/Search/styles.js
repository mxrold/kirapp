import styled, { css } from "styled-components"
import { Colors } from '../../styles/Colors'

export const Input = styled.input`
  display: none;
  ${props => props.show && css`
    display: block;
  `}
  ${props => props.open && css`
    display: block;
  `}
  z-index: 1;
  width: 160px;
  @media (min-width: 480px) {
    width: 220px;
  }
  height: 30px;
  margin-right: 6px;
  padding-left: 9px;
  background-color: ${Colors.lightGray};
  color: ${Colors.darkGray};
  border-radius: 7px;
  border: none;
  outline: none;
  &::placeholder {
    font-size: 1.4rem;
    color: ${Colors.mediumGray};
  }
  &:focus-within {
    width: 222px;
    height: 32px;
    border: 2px solid ${Colors.darkPurple};
  }
`

export const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${Colors.lightPurple};
  border-radius: 7px;
  & svg {
    color: ${Colors.darkPurple};
  }
`