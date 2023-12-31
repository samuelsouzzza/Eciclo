import styled from 'styled-components';

export const Container = styled.section`
  background-color: #92e3a922;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  padding: 0.5%;
  display: grid;
  grid-template-areas: 'feed main  menu sidenav';
  grid-template-columns: 1.5fr 3fr 2fr 40px;
  gap: 1%;
`;
