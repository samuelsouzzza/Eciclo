import styled from 'styled-components';

export const InputText = styled.input`
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 40px;
  width: 95%;
  font-size: 1.125rem;
  border-radius: 5px;
  padding: 0 2%;
  outline: 0;
  transition: 0.2s;
  margin: 1.5% 0;
  &:focus,
  &:hover {
    cursor: text;
    box-shadow: 1px 1px 1px 1px #20732d44;
  }
`;
