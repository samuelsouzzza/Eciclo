import React from 'react';
import {
  Wrapper,
  Container,
  Description,
  BoxData,
  BoxOwner,
  Category,
  PhotoOwner,
  T,
  HeaderPubli,
} from './ModalDetailsPublication.styles.ts';
import { Title } from '../Title/Title.tsx';
import { IPublication } from '../../@types/types';
import { BackBtn } from '../BackBtn/BackBtn.tsx';
import { UseContextScreens } from '../../global/ScreenStates.tsx';
import { CarouselImgs } from '../CarouselImgs/CarouselImgs.tsx';
import { handlerIcons } from '../../utils/handlerIcons.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { timerFormatter } from '../../utils/timerFormatter.ts';
import UserDefault from '../../assets/user-default.jpg';

type ModalDetailsPublicationProps = {
  data: IPublication;
};

export const ModalDetailsPublication = ({
  data,
}: ModalDetailsPublicationProps) => {
  const { setShowDetails } = UseContextScreens();
  const dateNow = new Date();
  const arrDateBRL = data.opening_date.split('-');
  const dateBRL = `${arrDateBRL[2]}/${arrDateBRL[1]}/${arrDateBRL[0]}`;
  console.log(data);
  return (
    <Wrapper>
      <Container>
        <div className='header'>
          <BackBtn text='Voltar' onClick={() => setShowDetails(null)} />
          <Title text='Detalhes da publicação' size={1.25} />
        </div>
        <BoxOwner>
          {data.owner.profile ? (
            <PhotoOwner
              src={`http://localhost:3000/${data.owner.profile}`}
              alt='Foto de perfil do proprietário da publicação'
            />
          ) : (
            <PhotoOwner
              src={UserDefault}
              alt='Foto de perfil do proprietário da publicação'
            />
          )}
          <span>{data.owner.complete_name}</span>
        </BoxOwner>
        <HeaderPubli>
          <T>
            <FontAwesomeIcon icon={handlerIcons(data.category)} className='i' />
            <span>{data.title}</span>
            <Category>{data.category}</Category>
          </T>
          <span>
            {dateBRL}({timerFormatter(new Date(data.opening_date), dateNow)})
          </span>
        </HeaderPubli>
        <CarouselImgs />

        <Description>{data.description}</Description>
        {/* <BoxData>teste</BoxData> */}
      </Container>
    </Wrapper>
  );
};
