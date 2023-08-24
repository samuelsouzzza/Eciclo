import styled from 'styled-components';

export const InputText = styled.input`
  background-color: ghostwhite;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 40px;
  width: 100%;
  font-size: 1.125rem;
  border-radius: 5px;
  padding: 0 2%;
  outline: 0;
  transition: 0.2s;
  margin: 1.5% 0;
  &[type='file'] {
    padding: 1%;
  }
  &:focus,
  &:hover {
    cursor: text;
    box-shadow: 1px 1px 1px 1px #20732d44;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;
export const Invalid = styled.p`
  color: #e04026;
  font-size: 0.75rem;
  display: inline;
`;
