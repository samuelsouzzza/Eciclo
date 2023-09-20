import styled from 'styled-components';

export const InputText = styled.input`
  background-color: #f8f8ff;
  border: 1px solid #0000001a;
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
