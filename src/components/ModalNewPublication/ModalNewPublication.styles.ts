import styled from 'styled-components';

export const Container = styled.section`
  background-color: #fff;
  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.05);
  height: 100%;
  width: 100%;
  border-radius: 5px;
  padding: 2.5%;
  grid-column-start: 2;
  grid-column-end: 4;
  overflow-y: scroll;
`;
export const BoxForm = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1%;
  align-items: center;
  justify-content: flex-end;
`;
