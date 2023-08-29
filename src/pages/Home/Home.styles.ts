import styled from 'styled-components';

export const Container = styled.section`
  background-color: #92e3a922;
  height: 100vh;
  width: 100vw;
  padding: 1%;
  display: grid;
  grid-template-areas: 'feed . menu sidenav';
  grid-template-columns: 1fr 3fr 1fr 40px;
`;
