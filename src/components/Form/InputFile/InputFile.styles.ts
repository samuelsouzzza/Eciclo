import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5%;
`;
export const File = styled.input`
  background-color: ghostwhite;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 60px;
  width: 100%;
  font-size: 1.125rem;
  border-radius: 5px;
  padding: 0 2%;
  outline: 0;
  transition: 0.2s;
  margin: 1.5% 0 3% 0;
  &[type='file'] {
    padding: 1%;
    cursor: pointer;
  }
  &:focus,
  &:hover {
    box-shadow: 1px 1px 1px 1px #20732d44;
  }
  &::-webkit-file-upload-button {
    background-color: #20732d44;
    border: none;
    height: 100%;
  }
`;
export const PreviewContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1%;
`;
export const PreviewImg = styled.img`
  height: 200px;
  width: 200px;
  margin: 2%;
  border: 1px solid #ccc;
  object-fit: contain;
`;
