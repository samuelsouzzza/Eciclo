import React from 'react';
import { Wrapper, Container } from './ModalDetailsPublication.styles.ts';
import { Title } from '../Title/Title.tsx';

export const ModalDetailsPublication = () => {
  return (
    <Wrapper>
      <Container>
        <Title text='Detalhes da publicação' size={1.25}></Title>
      </Container>
    </Wrapper>
  );
};
