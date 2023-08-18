import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: #92e3a922;
  padding: 2%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.section`
  background-color: #fff;
  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.05);
  height: auto;
  width: 60%;
  border-radius: 5px;
  padding: 2%;
`;
export const BoxForm = styled.section`
  margin: 2% 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-items: last baseline;
  gap: 2%;
`;
