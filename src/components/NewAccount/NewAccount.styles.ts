import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: #92e3a922;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.section`
  background-color: #fff;
  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.05);
  height: 400px;
  width: 60%;
  border-radius: 5px;
  padding: 2%;
`;
export const BoxForm = styled.section`
  & form {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 75px;
    gap: 2%;
  }
`;
