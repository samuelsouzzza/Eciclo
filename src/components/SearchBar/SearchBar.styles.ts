import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const Bar = styled.input`
  background-color: ghostwhite;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 25px;
  width: 80%;
  font-size: 1rem;
  border-radius: 5px;
  padding: 2%;
  outline: 0;
  transition: 0.2s;
  margin: 1% 0;
  &:focus,
  &:hover {
    cursor: text;
    box-shadow: 1px 1px 1px 1px #20732d44;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;
