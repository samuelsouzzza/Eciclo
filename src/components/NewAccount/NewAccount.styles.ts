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
  width: auto;
  height: auto;
`;
export const BoxForm = styled.div`
  padding: 2%;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  justify-content: center;
  gap: 2%;
  & .txtName {
    /* column-span: span 2; */
  }
`;
