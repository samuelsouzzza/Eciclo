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

export const Feed = () => {
  return (
    <Container>
      <Title text='Perto de você' size={1.25}>
        Perto de você
      </Title>
      <SearchBar placeholder='Pesquise aqui' />
      <Publication
        icon={faMobileScreen}
        title='Moto G7 Power'
        type='Celular'
        description='Celular com e tudo funcionando, mas está com a bateria um pouco viciada.'
      />
      <Publication
        icon={faLaptop}
        title='Notebook Asus i5'
        type='Notebook'
        description='Tudo funcioando, mas sem carregador.'
      />
      <Publication
        icon={faMobileScreen}
        title='Moto G7 Power'
        type='Celular'
        description='Celular com e tudo funcionando, mas está com a bateria um pouco viciada.'
      />
      <Publication
        icon={faLaptop}
        title='Notebook Asus i5'
        type='Notebook'
        description='Tudo funcioando, mas sem carregador.'
      />
      <Publication
        icon={faMobileScreen}
        title='Moto G7 Power'
        type='Celular'
        description='Celular com e tudo funcionando, mas está com a bateria um pouco viciada.'
      />
      <Publication
        icon={faLaptop}
        title='Notebook Asus i5'
        type='Notebook'
        description='Tudo funcioando, mas sem carregador.'
      />
    </Container>
  );
};
