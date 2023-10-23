import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 2% 0;
  background-color: #92e3a922;
`;
export const ContentLogin = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const BoxContent = styled.section`
  background-color: white;
  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 60%;
  min-width: 300px;
  height: auto;
  padding: 2%;
  animation: fadeInLeft forwards 0.2s;
  &form {
    grid-column: 2;
  }
`;
export const BoxLogo = styled.div`
  margin: 0 auto;
`;
export const Illustration = styled.img`
  width: 100%;
`;
export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BoxLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;
