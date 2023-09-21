import React from 'react';
import { Container } from './Home.styles.ts';
import { Feed } from '../../components/Feed/Feed';
import { SideMenu } from '../../components/SideMenu/SideMenu.tsx';
import { UseContextScreens } from '../../global/ScreenStates.tsx';
import { MenuNewPublication } from '../../components/MenuNewPublication/MenuNewPublication.tsx';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const { showFeed, showModalNewPublication } = UseContextScreens();
  const navigate = useNavigate();

  React.useEffect(() => {
    const userLogged = localStorage.getItem('userLogged');
    if (!userLogged) navigate('/');
  }, []);

  return (
    <Container>
      {showFeed ? <Feed /> : <></>}
      {showModalNewPublication ? <MenuNewPublication /> : <></>}
      <SideMenu />
    </Container>
  );
};
