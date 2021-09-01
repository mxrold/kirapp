import styled, { css } from 'styled-components'

export const Main = styled.main`
  ${props => props.col && css `
    @media (min-width: 780px) {
      display: flex;
      ${props => props.emptyNewTasks && css `
        flex-direction: column;
      `}
    };
  `}
  
  width: 100%;
  max-width: 1440px;
  height: calc(100vh - 120px);
  margin: 0 auto;
`
