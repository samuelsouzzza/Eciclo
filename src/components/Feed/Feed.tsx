import React from 'react';
import { Container } from './Feed.styles.ts';
import { Title } from '../Title/Title.tsx';
import { SearchBar } from '../SearchBar/SearchBar.tsx';
import { Publication } from '../Publication/Publication.tsx';
import {
  faMobileScreen,
  faLaptop,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../hooks/useFetch.ts';
import { IPublication } from '../../@types/types';

export const Feed = () => {
  const publications = useFetch<IPublication[]>(
    'http://localhost:3000/publications'
  );

  return (
    <Container>
      <Title text='Perto de você' size={1.25} />
      <SearchBar placeholder='Pesquise aqui' />
      {publications.data?.map((publication) => {
        return (
          <Publication
            key={publication.id}
            icon={faMobileScreen}
            title={publication.title}
            category={publication.category}
            description={publication.description}
          />
        );
      })}
    </Container>
  );
};
