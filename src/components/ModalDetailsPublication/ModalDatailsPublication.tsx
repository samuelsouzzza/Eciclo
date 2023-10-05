import React from 'react';
import { Wrapper, Container } from './ModalDetailsPublication.styles.ts';
import { Title } from '../Title/Title.tsx';
import { IPublication } from '../../@types/types';
import { BackBtn } from '../BackBtn/BackBtn.tsx';

type ModalDetailsPublicationProps = {
  data: IPublication;
};

export const ModalDetailsPublication = ({
  data,
}: ModalDetailsPublicationProps) => {
  return (
    <Wrapper>
      <Container>
        <div>
          <BackBtn text='Voltar' />
          <Title text='Detalhes da publicação' size={1.25}></Title>
        </div>
        {data.title}
      </Container>
    </Wrapper>
  );
};
