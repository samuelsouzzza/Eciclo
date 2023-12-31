import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f8f8ff;
  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.05);
  height: 100%;
  width: 100%;
  border-radius: 5px;
  padding: 2%;
  grid-column-start: 3;
  grid-column-end: 4;
  overflow-x: hidden;
  animation: fadeInLeft 0.3s forwards;
`;
export const BoxHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;
export const BoxData = styled.div`
  height: auto;
`;
export const P = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 5% 0;
`;
