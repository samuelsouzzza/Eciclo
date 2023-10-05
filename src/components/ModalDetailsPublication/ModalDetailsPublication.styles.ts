import styled from 'styled-components';

export const Wrapper = styled.section`
  top: 0;
  left: 0;
  padding-top: 1%;
  width: 100%;
  height: 100%;
  background-color: #00000033;
  display: flex;
  justify-content: center;
  align-items: start;
  position: fixed;
  z-index: 50;
`;
export const Container = styled.div`
  width: 400px;
  height: 300px;
  background-color: #f8f8ff;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 3px #0000000d;
  animation: 0.3s fadeInBottom forwards;
  padding: 1%;
  div {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }
`;
