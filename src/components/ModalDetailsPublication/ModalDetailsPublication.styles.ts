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
  .header-data {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  .title-data {
    display: flex;
    align-items: center;
    width: 50%;
    .i {
      margin-right: 1%;
    }
  }
  h3 {
    &::first-letter {
      text-transform: capitalize;
    }
  }
`;
export const Description = styled.article`
  width: 100%;
  &::first-letter {
    text-transform: capitalize;
  }
`;
export const BoxData = styled.section`
  background-color: red;
  width: 100%;
`;
