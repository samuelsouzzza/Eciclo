import React from 'react';
import { Container } from './Home.styles.ts';
import { Feed } from '../../components/Feed/Feed';
import { SideMenu } from '../../components/SideMenu/SideMenu.tsx';
import { UseContextScreens } from '../../global/ScreenStates.tsx';
import { MenuNewPublication } from '../../components/MenuNewPublication/MenuNewPublication.tsx';

export const Home = () => {
  const { showFeed, showModalNewPublication } = UseContextScreens();

  return (
    <Container>
      {showFeed ? <Feed /> : <></>}
      {showModalNewPublication ? <MenuNewPublication /> : <></>}
      <SideMenu />
    </Container>
  );
};
