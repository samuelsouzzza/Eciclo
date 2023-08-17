import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
  background-color: white;
  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  width: 70%;
`;
export const BoxForm = styled.div`
  display: grid;
  gap: 2%;
  grid-template-columns: repeat(2, 350px);
`;
