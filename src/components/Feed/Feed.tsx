import React from 'react';
import { Container, P } from './Feed.styles.ts';
import { Title } from '../Title/Title.tsx';
import { SearchBar } from '../SearchBar/SearchBar.tsx';
import { Publication } from '../Publication/Publication.tsx';
import useFetch from '../../hooks/useFetch.ts';
import { IPublication, IUser } from '../../@types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { handlerIcons } from '../../utils/handlerIcons.ts';
import { SkeletonPublicationLoader } from '../SkeletonPublicationLoader/SkeletonPublicationLoader.tsx';
import { timerFormatter } from '../../utils/timerFormatter.ts';
import { ModalDetailsPublication } from '../ModalDetailsPublication/ModalDatailsPublication.tsx';
import { UseContextScreens } from '../../global/ScreenStates.tsx';

export const Feed = () => {
  const publications = useFetch<IPublication[]>(
    'http://localhost:3000/publications'
  );

  const userLogged: IUser | undefined = JSON.parse(
    localStorage.getItem('userLogged') as string
  );
  const publicationFiltred = publications.data
    ?.filter((p) => p.owner.id != userLogged?.id)
    .reverse();

  const { showDetails, setShowDetails } = UseContextScreens();

  return (
    <>
      {showDetails && <ModalDetailsPublication data={showDetails} />}
      <Container>
        <Title text='Perto de você' size={1.25} />
        <SearchBar placeholder='Pesquise aqui' />
        {publicationFiltred?.length === 0 && <P>Não há publicações</P>}
        {publications.loading && <SkeletonPublicationLoader />}
        {publicationFiltred?.map((publication) => {
          const dateNow = new Date();
          const datePublication = new Date(publication.opening_date);
          return (
            <Publication
              key={publication.id}
              icon={
                <FontAwesomeIcon
                  icon={handlerIcons(publication.category)}
                  className='i'
                />
              }
              onDetails={() => setShowDetails(publication)}
              title={publication.title}
              category={publication.category}
              dateCreation={timerFormatter(datePublication, dateNow)}
              description={publication.description}
              owner={publication.owner.complete_name}
              adress={publication.collect_receipt}
            />
          );
        })}
      </Container>
    </>
  );
};
