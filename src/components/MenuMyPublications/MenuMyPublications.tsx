import React from 'react';
import { Container, P } from './MenuMyPublications.styles.ts';
import { BackBtn } from '../BackBtn/BackBtn.tsx';
import { Title } from '../Title/Title.tsx';
import { UseContextScreens } from '../../global/ScreenStates.tsx';
import { handlerMenus } from '../../utils/handlerMenus.ts';
import { MyPublication } from '../MyPublication/MyPublication.tsx';
import useFetch from '../../hooks/useFetch.ts';
import { IPublication, IUser } from '../../@types/types';

export const MenuMyPublications = () => {
  const { setShowFeed, setShowMenuMyPublications } = UseContextScreens();

  const publications = useFetch<IPublication[]>(
    'http://localhost:3000/publications'
  );

  const userLogged: IUser = JSON.parse(
    localStorage.getItem('userLogged') as string
  );

  const publicationsFiltred = publications.data?.filter(
    (publication) => publication.owner.id == userLogged.id
  );

  function closeMenu() {
    handlerMenus([setShowFeed], [setShowMenuMyPublications]);
  }
  return (
    <Container>
      <BackBtn text='Voltar' onClick={closeMenu} />
      <Title text='Minhas publicações' size={1.25} />
      {publicationsFiltred?.length === 0 && <P>Não há publicações</P>}
      {publications.loading && <p>Carregando...</p>}
      {publicationsFiltred?.map((publication) => {
        return <MyPublication id={publication.id} title={publication.title} />;
      })}
    </Container>
  );
};
