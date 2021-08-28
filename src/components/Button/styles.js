import styled, { css } from 'styled-components'

export const Btn = styled.button`
  min-width: max-content;
  ${props => props.width && css`
    width: ${props.width};
  `};
  ${props => props.height && css`
    height: ${props.height};
  `};
  ${props => props.marginR && css`
    margin-right: ${props.marginR};
  `};
  padding: 3px 9px;
  font-size: 1.5rem;
  font-weight: 500;
  ${props => props.bgColor && css`
    background-color: ${props.bgColor};
  `};
  ${props => props.textColor && css`
    color: ${props.textColor};
  `};
  border-radius: 7px;
`
