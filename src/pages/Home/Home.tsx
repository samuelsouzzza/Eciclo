import React from 'react';
import { Container } from './Home.styles.ts';
import { Feed } from '../../components/Feed/Feed';

export const Home = () => {
  return (
    <Container>
      <Feed></Feed>
    </Container>
  );
};
