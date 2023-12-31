import styled from 'styled-components';

export const Btn = styled.button`
  width: 100%;
  height: 40px;
  font-size: 1.125rem;
  margin: 1% 0;
  cursor: pointer;
  background-color: #92e3a944;
  border: 1px solid #92e3a9;
  border-radius: 5px;
  color: #333;
  transition: 0.3s;
  &:hover {
    background-color: #92e3a9;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #f8f8ff;
  }
`;
