import React from 'react';
import { Container } from './Home.styles.ts';
import { Feed } from '../../components/Feed/Feed';
import { SideMenu } from '../../components/SideMenu/SideMenu.tsx';
import { UseContextScreens } from '../../global/ScreenStates.tsx';
import { MenuNewPublication } from '../../components/MenuNewPublication/MenuNewPublication.tsx';
import { MenuMyPublications } from '../../components/MenuMyPublications/MenuMyPublications.tsx';
import { useNavigate } from 'react-router-dom';
import { HeadName } from '../../utils/HeadName.ts';
import { SplashScreen } from '../../components/SplashScreen/SplashScreen.tsx';

export const Home = () => {
  const { showFeed, showMenuNewPublication, showMenuMyPublications } =
    UseContextScreens();
  const navigate = useNavigate();
  const [splash, setSplash] = React.useState(true);

  React.useEffect(() => {
    const userLogged = localStorage.getItem('userLogged');
    if (!userLogged) navigate('/');
  }, []);

  setTimeout(() => setSplash(false), 1500);

  return (
    <Container>
      <HeadName
        title='E-Ciclo • Home'
        description='Esta é a página principal.'
      />
      {splash && <SplashScreen />}
      {showFeed && <Feed />}
      {showMenuNewPublication && <MenuNewPublication />}
      {showMenuMyPublications && <MenuMyPublications />}
      <SideMenu />
    </Container>
  );
};
