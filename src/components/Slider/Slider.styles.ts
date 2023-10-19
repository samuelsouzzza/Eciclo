import styled from 'styled-components';

export const Container = styled.section`
  overflow: hidden;
`;
export const Content = styled.article`
  display: flex;
  transition: transform 0.3s ease;
  margin: 1% 0;
`;
export const Item = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-height: 300px;
  background: #eee;
  border-radius: 4px;
  text-align: center;
  display: flex;
`;
export const BoxButtons = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  padding: 1%;
`;
