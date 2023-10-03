import React from 'react';
import { Container } from './Home.styles.ts';
import { Feed } from '../../components/Feed/Feed';
import { SideMenu } from '../../components/SideMenu/SideMenu.tsx';
import { UseContextScreens } from '../../global/ScreenStates.tsx';
import { MenuNewPublication } from '../../components/MenuNewPublication/MenuNewPublication.tsx';
import { MenuMyPublications } from '../../components/MenuMyPublications/MenuMyPublications.tsx';
import { useNavigate } from 'react-router-dom';
import { ModalDetailsPublication } from '../../components/ModalDetailsPublication/ModalDatailsPublication.tsx';

export const Home = () => {
  const { showFeed, showMenuNewPublication, showMenuMyPublications } =
    UseContextScreens();
  const navigate = useNavigate();

  React.useEffect(() => {
    const userLogged = localStorage.getItem('userLogged');
    if (!userLogged) navigate('/');
  }, []);

  return (
    <Container>
      <ModalDetailsPublication />
      {showFeed && <Feed />}
      {showMenuNewPublication && <MenuNewPublication />}
      {showMenuMyPublications && <MenuMyPublications />}

      <SideMenu />
    </Container>
  );
};
