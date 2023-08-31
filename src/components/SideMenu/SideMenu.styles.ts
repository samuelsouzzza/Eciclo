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
    font-size: 1.25rem;
    cursor: pointer;
    padding: 10% 2%;
    width: 90%;
    border-radius: 5px;
    transition: 0.3s;
    &:hover {
      background-color: #92e3a944;
    }
    &.new {
      background-color: #92e3a944;
      border: 1px solid #92e3a9;
      &:hover {
        background-color: #92e3a9;
      }
    }
  }
`;
