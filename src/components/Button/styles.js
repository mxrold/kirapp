import styled, { css } from 'styled-components'

export const Btn = styled.button`
  min-width: max-content;
  ${props => props.width && css`
    width: ${props.width};
  `}
  ${props => props.height && css`
    height: ${props.height};
  `}
  margin-right: 14px;
  padding: 3px 9px;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 7px;
`
