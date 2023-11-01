import styled from 'styled-components';

export const Container = styled.div`
  padding: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1% 0;
  border-bottom: 1px solid #0000001a;
  animation: fadeInRight 0.3s forwards;
  transition: 0.3s;
  border-radius: 5px;
  div {
    display: flex;
    width: 50%;
    justify-content: end;
    align-items: center;
    gap: 10%;
    > svg {
      cursor: pointer;
      transition: 0.3s;
      font-weight: 100;
      > path {
        fill: #333;
        transition: 0.3s;
      }
      &:hover {
        transform: scale(1.25);
        > path {
          fill: #000;
        }
      }
    }
  }
  &:hover {
    background-color: #92e3a966;
    cursor: pointer;
  }
`;
export const T = styled.p`
  width: 90%;
  color: #333;
  justify-self: start;
  cursor: pointer;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;
export const Temp = styled.p`
  font-size: 0.75rem;
  width: max-content;
  white-space: nowrap;
`;
