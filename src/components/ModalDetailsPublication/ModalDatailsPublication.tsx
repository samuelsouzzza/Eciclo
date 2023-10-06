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

  console.log(!!data.owner.profile);
  return (
    <Wrapper>
      <Container>
        <div className='header'>
          <BackBtn text='Voltar' onClick={() => setShowDetails(null)} />
          <Title text='Detalhes da publicação' size={1.25}></Title>
        </div>
        {/* <p>{!!data.owner.profile}</p> */}
        <BoxOwner>
          {data.owner.profile ? (
            <PhotoOwner
              src={`http://localhost:3000/${data.owner.profile}`}
              alt='Foto de perfil do proprietário da publicação'
            />
          ) : (
            <PhotoOwner
              src={`https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80`}
              alt='Foto de perfil do proprietário da publicação'
            />
          )}
          <p>{data.owner.complete_name}</p>
        </BoxOwner>
        <HeaderPubli>
          <T>
            <FontAwesomeIcon icon={handlerIcons(data.category)} className='i' />
            <h3>{data.title}</h3>
            <Category>{data.category}</Category>
          </T>
          <p>
            {dateBRL}({timerFormatter(new Date(data.opening_date), dateNow)})
          </p>
        </HeaderPubli>
        <CarouselImgs />

        <Description>{data.description}</Description>
        {/* <BoxData>teste</BoxData> */}
      </Container>
    </Wrapper>
  );
};
