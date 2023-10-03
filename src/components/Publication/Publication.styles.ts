import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #0000001a;
  display: flex;
  flex-direction: column;
  margin: 5% 0;
  padding: 1%;
  height: auto;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    h4 {
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
    }
  }
  .i {
    margin-right: 1%;
  }
`;

export const Category = styled.span`
  background-color: #92e3a944;
  border: 1px solid #92e3a9;
  padding: 0.25% 3%;
  width: min-content;
  font-size: 0.75rem;
  border-radius: 5px;
  margin: 2% 0;
  text-transform: capitalize;
  display: inline-block;
`;
export const B = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2%;
`;
export const BoxInfo = styled.p`
  color: #333;
  margin: 1% 0;
  font-weight: bold;
  font-size: 0.75rem;
  width: 100%;
  display: block;
  align-items: center;
  justify-content: start;
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  > span {
    display: flex;
    align-items: center;
  }
`;
export const Description = styled.span`
  font-size: 0.75rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 1% 0;
  &::first-letter {
    text-transform: capitalize;
  }
`;
