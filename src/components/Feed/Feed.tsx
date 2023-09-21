import React from 'react';
import { Container, BoxEmpty } from './Feed.styles.ts';
import { Title } from '../Title/Title.tsx';
import { SearchBar } from '../SearchBar/SearchBar.tsx';
import { Publication } from '../Publication/Publication.tsx';
import useFetch from '../../hooks/useFetch.ts';
import { IPublication } from '../../@types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { chooseIcon } from '../../utils/chooseIcon.tsx';

export const Feed = () => {
  const publications = useFetch<IPublication[]>(
    'http://localhost:3000/publications'
  );

  return (
    <Container>
      <Title text='Perto de você' size={1.25} />
      <SearchBar placeholder='Pesquise aqui' />
      {publications.data?.length === 0 && (
        <BoxEmpty>Não há publicações</BoxEmpty>
      )}
      {publications.data?.map((publication) => {
        return (
          <Publication
            key={publication.id}
            icon={
              <FontAwesomeIcon
                icon={chooseIcon(publication.category)}
                className='i'
              />
            }
            title={publication.title}
            category={publication.category}
            description={publication.description}
          />
        );
      })}
    </Container>
  );
};
