import React from 'react';
import { Container } from './MenuMyPublications.styles.ts';
import { BackBtn } from '../BackBtn/BackBtn.tsx';
import { Title } from '../Title/Title.tsx';
import { UseContextScreens } from '../../global/ScreenStates.tsx';
import { handlerMenus } from '../../utils/handlerMenus.ts';

export const MenuMyPublications = () => {
  const { setShowFeed, setShowMenuMyPublications } = UseContextScreens();

  function closeMenu() {
    // setShowFeed(true);
    // setShowMenuMyPublications(false);
    handlerMenus(setShowFeed, [setShowMenuMyPublications]);
  }
  return (
    <Container>
      <BackBtn text='Voltar' onClick={closeMenu} />
      <Title text='Minhas publicações' size={1.25} />
    </Container>
  );
};
