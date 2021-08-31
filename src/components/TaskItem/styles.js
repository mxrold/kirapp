import styled, { css } from 'styled-components'
import { Colors } from '../../styles/Colors'

export const Card = styled.article`
  width: 100%;
  min-width: 300px;
  max-width: 680px;
  @media (min-width: 780px) {
    width: 50%;
  };
  height: max-content;
  margin-top: 12px;
  padding: 14px;
  background-color: ${Colors.white};
  box-shadow: 1px 1px 3px 1px ${Colors.shadow};
  border-radius: 4.5px;
  ${props => props.status && css `
    opacity: 0.6;
    text-decoration: line-through ${Colors.darkPurple};
  `}
`

export const DivTop = styled.div`
  display: flex;
  justify-content: space-between;
  height: max-content;
`

export const Title = styled.h3`
  font-size: 1.8rem;
  color: ${Colors.darkGray};
`

export const Description = styled.p`
  font-size: 1.4rem;
  color: ${Colors.darkGray};
`

export const ContainerDate = styled.div`
  align-self: center;
`

export const Date = styled.span`
  font-size: 1.2rem;
  color: ${Colors.darkGray};
`

export const DivBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: max-content;
  margin-top: 8px;
`

export const Category = styled.p`
  font-size: 1.2rem;
  color: ${Colors.darkGray};
`

export const Actions = styled.div`
  
`

export const BtnAction = styled.button`
  width: 34px;
  height: 34px;
  background-color: transparent;
  border-radius: 7px;
  color: ${Colors.mediumGray};
  ${props => props.hover && css`
    ${props => props.status && css `
      color: ${props.hover};
    `}
    &:hover {
      color: ${props.hover};
    }
  `};
  &:hover {
    background-color: ${Colors.lightGray};
    border: 1px solid rgba(0, 0, 0, .1);
  }
`
