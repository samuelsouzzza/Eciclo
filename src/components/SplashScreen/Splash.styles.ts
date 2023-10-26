import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: #f8f8ff;
  position: absolute;
  inset: 0;
  z-index: 3;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BoxLogo = styled.div`
  width: auto;
  animation: pulseLogo 1s alternate-reverse infinite;
`;
