import React from 'react';
import { Wrapper, Container } from './ModalDetailsPublication.styles.ts';
import { Title } from '../Title/Title.tsx';
import { IPublication } from '../../@types/types';
import { BackBtn } from '../BackBtn/BackBtn.tsx';
import { UseContextScreens } from '../../global/ScreenStates.tsx';

type ModalDetailsPublicationProps = {
  data: IPublication;
};

export const ModalDetailsPublication = ({
  data,
}: ModalDetailsPublicationProps) => {
  const { setShowDetails } = UseContextScreens();

  return (
    <Wrapper>
      <Container>
        <div>
          <BackBtn text='Voltar' onClick={() => setShowDetails(null)} />
          <Title text='Detalhes da publicação' size={1.25}></Title>
        </div>
        {data.title}
      </Container>
    </Wrapper>
  );
};
