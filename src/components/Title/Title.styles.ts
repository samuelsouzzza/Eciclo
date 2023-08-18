import styled from 'styled-components';

export const T = styled.h1`
  font-size: 1.75rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 3% 0 5% 0;
  ::before {
    content: '';
    width: 30px;
    height: 30px;
    background-color: green;
  }
`;
