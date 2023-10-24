import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 20%;
  margin: 1%;
  background: linear-gradient(90deg, #f6f6f6 25%, #f0f0f0 50%, #f6f6f6 75%);
  background-size: 200% 100%;
  animation: loadingSkeleton linear 1.5s infinite;
  border-radius: 5px;
`;
