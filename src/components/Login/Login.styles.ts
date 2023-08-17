import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #92e3a922;
`;
export const Container = styled.section`
  background-color: white;
  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.05);
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  border-radius: 5px;
  width: 60%;
  min-width: 300px;
  height: auto;
  padding: 2%;
  &form {
    grid-column: 2;
  }
`;
export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BoxLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;
