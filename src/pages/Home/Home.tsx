import React from 'react';
import { Container } from './Home.styles.ts';
import { Feed } from '../../components/Feed/Feed';
import { SideMenu } from '../../components/SideMenu/SideMenu.tsx';

export const Home = () => {
  return (
    <Container>
      <Feed></Feed>
      <SideMenu></SideMenu>
    </Container>
  );
};
