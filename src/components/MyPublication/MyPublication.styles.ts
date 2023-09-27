import styled from 'styled-components';

export const Container = styled.div`
  padding: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3% 0;
  border-bottom: 1px solid #0000001a;
  div {
    display: flex;
    width: 30%;
    justify-content: end;
    align-items: center;
    gap: 10%;
  }
`;
export const T = styled.p`
  color: #333;
  justify-self: start;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const Temp = styled.p`
  font-size: 0.75rem;
`;
export const BtnDel = styled.button`
  width: 20%;
  height: auto;
  border: none;
  background-color: #fff;
  border-radius: 5px;
  padding: 0.5% 1%;
  cursor: pointer;
  transition: 0.3s;
  > svg > path {
    fill: #333;
    transition: 0.3s;
  }
  &:hover {
    transform: scale(1.25);
    > svg > path {
      fill: #e04026;
    }
  }
`;
export const BtnEdit = styled.button`
  width: 20%;
  height: auto;
  border: none;
  background-color: #fff;
  border-radius: 5px;
  padding: 0.5% 1%;
  cursor: pointer;
  transition: 0.3s;
  > svg > path {
    fill: #333;
    transition: 0.3s;
  }
  &:hover {
    transform: scale(1.25);
    > svg > path {
      fill: #2651e0;
    }
  }
`;
