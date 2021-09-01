import styled, { css } from 'styled-components'

export const Section = styled.section`
  width: 90%;
  height: auto;
  margin: 0 auto;
  padding-top: 26px;
  @media (min-width: 780px) {
    height: calc(100vh - 120px);
    margin: 0 auto;
    ${props => props.layout && css`
      padding-top: 10px;
    `}
   
  };
`

export const List = styled.div`
  display: grid;
  place-items: start center;
  width: 100%;
  @media (min-width: 780px) {
    height: 100%;
    overflow-y: auto;
  };
`