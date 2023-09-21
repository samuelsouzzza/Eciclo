import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #0000001a;
  display: flex;
  flex-direction: column;
  margin: 5% 0;
  padding: 1% 0;
  height: auto;
  width: 100%;
  div {
    display: flex;
    align-items: center;
  }
  .i {
    margin-right: 1%;
  }
`;
export const Description = styled.span`
  font-size: 0.75rem;
  width: 100%;
  word-wrap: break-word;
  margin: 3% 0 0.1% 0;
`;
export const Category = styled.span`
  background-color: #92e3a944;
  border: 1px solid #92e3a9;
  padding: 0.25% 3%;
  border-radius: 5px;
  margin-right: 1%;
  text-transform: capitalize;
  display: inline-block;
`;
export const Local = styled.p`
  color: #333;
  margin: 1% 0;
  font-weight: bold;
  font-size: 0.75rem;
  width: 50%;
  display: flex;
  align-items: center;
`;
export const Author = styled.p`
  color: #333;
  margin: 1% 0;
  font-weight: bold;
  font-size: 0.75rem;
  width: 50%;
  display: flex;
  align-items: center;
`;
export const B = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
