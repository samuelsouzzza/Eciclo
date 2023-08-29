import React from 'react';
import { Container } from './Feed.styles.ts';
import { Title } from '../Title/Title.tsx';
import { Publication } from '../Publication/Publication.tsx';

export const Feed = () => {
  return (
    <Container>
      <Title text='Perto de você' size={1.25}>
        Perto de você
      </Title>
      <Publication
        img=''
        title='Primeira publicação'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, maxime.'
      />
      <Publication
        img=''
        title='Primeira publicação'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, maxime.'
      />
    </Container>
  );
};
