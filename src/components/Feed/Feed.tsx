import React from 'react';
import { Container, P } from './Feed.styles.ts';
import { Title } from '../Title/Title.tsx';
import { SearchBar } from '../SearchBar/SearchBar.tsx';
import { Publication } from '../Publication/Publication.tsx';
import { IPublication, IUser } from '../../@types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { handlerIcons } from '../../utils/handlerIcons.ts';
import { SkeletonPublicationLoader } from '../SkeletonPublicationLoader/SkeletonPublicationLoader.tsx';
import { timerFormatter } from '../../utils/timerFormatter.ts';
import { ModalDetailsPublication } from '../ModalDetailsPublication/ModalDatailsPublication.tsx';
import { UseContextScreens } from '../../global/ScreenStates.tsx';

export const Feed = () => {
  const { showDetails, setShowDetails } = UseContextScreens();
  const [loadingFeed, setLoadingFeed] = React.useState(false);
  const [publicationsFiltred, setPublicationsFiltred] = React.useState<
    IPublication[] | null
  >(null);

  const userLogged: IUser | undefined = JSON.parse(
    localStorage.getItem('userLogged') as string
  );

  async function getAllPublications() {
    try {
      setLoadingFeed(true);
      const response = await fetch(
        `http://localhost:3000/feedPublications/${userLogged?.cpf}`
      );
      const data: IPublication[] = await response.json();
      setPublicationsFiltred(data);
    } catch (error) {
      console.log('Não foi possível encontrar as publicações no servidor.');
      throw error;
    } finally {
      setLoadingFeed(false);
    }
  }

  React.useEffect(() => {
    getAllPublications();
  }, []);

  return (
    <>
      {showDetails && <ModalDetailsPublication data={showDetails} />}
      <Container>
        <Title text='Perto de você' size={1.25} />
        <SearchBar placeholder='Pesquise aqui' />
        {publicationsFiltred?.length === 0 && <P>Não há publicações</P>}
        {loadingFeed && <SkeletonPublicationLoader />}
        {publicationsFiltred?.map((publication) => {
          const dateNow = new Date();
          const datePublication = new Date(publication.opening_date);
          return (
            <Publication
              key={publication._id}
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
