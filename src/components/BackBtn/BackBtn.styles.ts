import styled from 'styled-components';

export const B = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 1rem;
  width: 8%;
  cursor: pointer;
  svg {
    margin-right: 2%;
  }
  &:is(:hover, :focus) {
    color: #92e3a9;
    svg > path {
      color: #92e3a9;
    }
  }
`;
