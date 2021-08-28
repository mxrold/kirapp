import styled from 'styled-components'

export const Section = styled.section`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  @media (min-width: 780px) {
    width: 50%;
    height: calc(100vh - 120px);
    margin: 0;
  };
  padding: 26px 0;
`

export const List = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  min-height: max-content;
  @media (min-width: 780px) {
    overflow-y: auto;
  };
`