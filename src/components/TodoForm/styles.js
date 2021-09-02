import styled, { css } from 'styled-components'
import { Colors } from '../../styles/Colors'

const STYLES_INPUT = `
  padding: 9px;
  font-size: 1.4rem;
  font-style: normal;
  background-color: ${Colors.white};
  color: ${Colors.darkGray};
  border: none;
  outline: none;
  border-bottom: 2px solid ${Colors.lightPurple};
  border-radius: 3.5px;
  ::placeholder {
    font-size: 1.4rem;
    font-style: normal;
    color: ${Colors.mediumGray};
  }
`

export const Form = styled.form`
  position: relative;
  width: 85%;
  min-width: 300px;
  max-width: 500px;
  @media (min-width: 780px) {
    width: 100%;
  }
  height: max-content;
  padding: 28px;
  background-color: ${Colors.lightGray};
  border: 2px solid ${Colors.darkPurple};
  border-radius: 21px;
`

export const DivTitle = styled.div`
  position: absolute;
  top: -32.5px;
  right: calc(50% - 113.25px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px;
  background-color: ${Colors.lightGray};
  border: 2px solid ${Colors.darkPurple};
  border-radius: 14px;
  text-align: center;
`

export const H3 = styled.h3`
  font-size: 1.8rem;
  color: ${Colors.darkPurple};
`

export const Span = styled.span`
  margin-left: 9px;
  padding: 5px;
  background-color: ${Colors.lightPurple};
  border-radius: 50px;
  & svg {
    color: ${Colors.darkPurple};
  }
`

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ContainerLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Label = styled.label`
  margin-top: 18px;
  margin-bottom: 4.5px;
  padding-left: 4.5px;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${Colors.darkGray};
`

export const TextCounter = styled.span`
  margin-top: 18px;
`

export const Input = styled.input`
  height: 36px;
  ${STYLES_INPUT};
  ::-webkit-calendar-picker-indicator {
    opacity: 100;
    color: ${Colors.mediumPurple};
  }
  &:focus-within {
    border: 2px solid ${Colors.mediumPurple};
  }
`

export const Textarea = styled.textarea`
  min-height: 144px;
  height: 144px;
  max-height: 240px;
  ${STYLES_INPUT};
  resize: vertical;
  &:focus-within {
    border: 2px solid ${Colors.mediumPurple};
  }
`

export const DivButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 36px;
  margin-top: 18px;
`

export const Button = styled.button`
  width: max-content;
  height: 36px;
  font-size: 1.5rem;
  font-weight: 500;
  ${props => props.cancel && css`
    margin-right: 12px;
    padding: 3px 9px;
    background-color: ${Colors.lightPurple};
    color: ${Colors.darkPurple};
  `}
  ${props => props.add && css`
    padding: 3px 18px;
    background-color: ${Colors.darkPurple};
    color: ${Colors.lightGray};
  `}
  border-radius: 7px;
`
