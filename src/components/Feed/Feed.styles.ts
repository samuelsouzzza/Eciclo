import styled from 'styled-components';

export const Container = styled.section`
  background-color: #fff;
  box-shadow: 1px 1px 5px 3px #0000000d;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  align-self: flex-end;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  grid-area: feed;
  overflow-y: scroll;
  animation: fadeInRight 0.3s forwards;
`;
export const P = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
