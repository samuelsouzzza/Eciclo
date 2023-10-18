import styled from 'styled-components';

export const Container = styled.section`
  aspect-ratio: 4/2;
  width: 100%;
  border-radius: 5px;
  margin: 1% 0;
  overflow-x: hidden;
`;
export const Content = styled.article`
  display: flex;
  transition: transform 0.3s ease;
`;
export const Item = styled.div`
  background-color: #eee;
  width: 100%;
  flex-shrink: 0;
`;
export const BoxButtons = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Image = styled.img`
  max-height: 100%;
  aspect-ratio: 4/2;
  object-fit: contain;
`;
