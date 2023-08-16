import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.section`
  background-color: white;
  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 5px;
  width: 50%;
  height: 400px;
  padding: 2%;
  &form {
    grid-column: 2;
  }
`;
