import styled from 'styled-components';

export const Container = styled.aside`
  background-color: #fff;
  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  height: 100%;
  width: 100%;
  grid-area: sidenav;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 5%;
  padding: 50% 5%;
  .i {
    cursor: pointer;
    padding: 5%;
    width: 90%;
    height: 20px;
    border: 1px solid #fff;
    border-radius: 5px;
    transition: 0.3s;
    &:hover {
      path {
        color: #92e3a9;
      }
      background-color: #92e3a944;
    }
    &.new {
      background-color: #92e3a944;
      border: 1px solid #92e3a9;
      height: 20px;
      width: 20px;
      padding: 10%;
      border-radius: 50%;
      &:hover {
        background-color: #92e3a9;
        path {
          color: #fff;
        }
      }
    }
    &.active {
      background-color: #92e3a944;
      border: 1px solid #92e3a9;
    }
    &.loggout {
      &:hover {
        background-color: #e0402644;
        path {
          color: #e04026;
        }
      }
    }
  }
`;
