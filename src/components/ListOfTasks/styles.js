import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${props => props.layout && css`
    @media (min-width: 780px) {
      margin-top: 26px;
    };
  `}
  width: 90%;
  height: auto;
  margin: 0 auto;
  @media (min-width: 780px) {
    height: calc(100vh - 120px);
    margin: 0 auto;
  };
  padding: 26px 0;
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