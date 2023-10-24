import styled from 'styled-components';

export const Container = styled.section`
  overflow: hidden;
`;
export const Content = styled.article`
  display: flex;
  transition: transform 0.3s ease;
  margin: 1% 0;
  position: relative;
  min-height: 50%;
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
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc(3% + 10px) 0 3%;
  position: absolute;
  left: 0;
  z-index: 1;
  button {
    width: 45px;
    height: 45px;
    background-color: #fff;
    border: 1px solid #0000001a;
    border-radius: 50%;
    cursor: pointer;
    translate: 10% -100%;
    transition: 0.3s;
    &:hover {
      background-color: #92e3a9aa;
      transform: scale(1.1);
    }
  }
`;
export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  padding: 1%;
`;
export const Count = styled.section`
  max-width: 100%;
  text-align: center;
`;
