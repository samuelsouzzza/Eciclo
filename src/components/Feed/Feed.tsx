import React from 'react';
import { Container } from './Feed.styles.ts';
import { Title } from '../Title/Title.tsx';

export const Feed = () => {
  return (
    <Container>
      <Title text='Perto de você' size={1.25}>
        Perto de você
      </Title>
    </Container>
  );
};
