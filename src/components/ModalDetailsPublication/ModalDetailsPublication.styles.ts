import styled from 'styled-components';

export const Wrapper = styled.section`
  top: 0;
  left: 0;
  padding-top: 1%;
  width: 100%;
  height: 100%;
  background-color: #00000033;
  display: flex;
  justify-content: center;
  align-items: start;
  position: fixed;
  z-index: 50;
`;
export const Container = styled.div`
  width: 45%;
  height: auto;
  background-color: #f8f8ff;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 3px #0000000d;
  animation: 0.3s fadeInBottom forwards;
  padding: 1%;
  .header {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }

  h3 {
    &::first-letter {
      text-transform: capitalize;
    }
  }
`;
export const HeaderPubli = styled.div`
  display: flex;
`;

export const T = styled.h4`
  display: flex;
  align-items: center;
  width: 100%;
  .i {
    margin-right: 1%;
  }
`;

export const Description = styled.article`
  width: 100%;
  &::first-letter {
    text-transform: capitalize;
  }
`;
export const BoxData = styled.section`
  width: 100%;
`;
export const Category = styled.span`
  background-color: #92e3a944;
  border: 1px solid #92e3a9;
  padding: 0.25% 3%;
  width: min-content;
  font-size: 0.75rem;
  border-radius: 5px;
  margin: 0 2%;
  text-transform: capitalize;
  display: inline-block;
`;
export const BoxOwner = styled.p`
  display: flex;
  align-items: center;
  gap: 1%;
  margin: 1% 0;
`;
export const PhotoOwner = styled.img`
  border-radius: 50px;
  max-width: 40px;
  aspect-ratio: 1/1;
`;
