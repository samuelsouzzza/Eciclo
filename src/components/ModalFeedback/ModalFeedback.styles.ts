import styled from 'styled-components';

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000033;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 50;
`;
export const Container = styled.div`
  width: 300px;
  height: auto;
  border-radius: 5px;
  background-color: #f8f8ff;
  box-shadow: 1px 1px 5px 3px #0000000d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1%;
`;
