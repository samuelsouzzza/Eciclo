import React from 'react';
import {
  Wrapper,
  Container,
  Description,
  BoxData,
} from './ModalDetailsPublication.styles.ts';
import { Title } from '../Title/Title.tsx';
import { IPublication } from '../../@types/types';
import { BackBtn } from '../BackBtn/BackBtn.tsx';
import { UseContextScreens } from '../../global/ScreenStates.tsx';
import { CarouselImgs } from '../CarouselImgs/CarouselImgs.tsx';
import { handlerIcons } from '../../utils/handlerIcons.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <div className='header'>
          <BackBtn text='Voltar' onClick={() => setShowDetails(null)} />
          <Title text='Detalhes da publicação' size={1.25}></Title>
        </div>
        <div className='header-data'>
          <div className='title-data'>
            <FontAwesomeIcon icon={handlerIcons(data.category)} className='i' />
            <h3>{data.title}</h3>
          </div>
          <p>{data.opening_date}</p>
        </div>
        <CarouselImgs />
        <Description>{data.description}</Description>
        <BoxData>teste</BoxData>
      </Container>
    </Wrapper>
  );
};
