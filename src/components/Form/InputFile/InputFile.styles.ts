import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
`;
export const File = styled.input`
  background-color: ghostwhite;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 60px;
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
  &::-webkit-file-upload-button {
    background-color: #20732d44;
    border: none;
    height: 100%;
  }
`;
