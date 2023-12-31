import React from 'react';
import {
  Wrapper,
  Container,
  Description,
  BoxButtons,
  BoxOwner,
  Category,
  PhotoOwner,
  T,
  HeaderPubli,
  BoxInfo,
} from './ModalDetailsPublication.styles.ts';
import { Title } from '../Title/Title.tsx';
import { IPublication } from '../../@types/types';
import { BackBtn } from '../BackBtn/BackBtn.tsx';
import { UseContextScreens } from '../../global/ScreenStates.tsx';
import { Slider } from '../Slider/Slider.tsx';
import { handlerIcons } from '../../utils/handlerIcons.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCompass } from '@fortawesome/free-regular-svg-icons';
import { timerFormatter } from '../../utils/timerFormatter.ts';
import UserDefault from '../../assets/user-default.jpg';
import { PrimaryButton } from '../Form/PrimaryButton/PrimaryButton.tsx';
import { SecondaryButton } from '../Form/SecondaryButton/SecondaryButton.tsx';

type ModalDetailsPublicationProps = {
  data: IPublication;
};

export const ModalDetailsPublication = ({
  data,
}: ModalDetailsPublicationProps) => {
  const { setShowDetails } = UseContextScreens();
  const dateNow = new Date();
  const arrDateBRL = data.opening_date.split('-');

  const boxStyle: React.CSSProperties = {
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
  };

  function openWhatsApp(cell: string) {
    window.open(`https://wa.me/55${cell}`, '_blank');
  }
  return (
    <Wrapper>
      <Container>
        <div className='header'>
          <BackBtn text='Voltar' onClick={() => setShowDetails(null)} />
          <Title
            text='Detalhes da publicação'
            size={1.25}
            style={{ margin: '2% 0' }}
          />
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
        </HeaderPubli>
        <BoxInfo>
          <span>
            <FontAwesomeIcon icon={faClock} />
            {timerFormatter(new Date(data.opening_date), dateNow)}
          </span>
          <span>
            <FontAwesomeIcon icon={faCompass} />
            {data.collect_receipt}
          </span>
        </BoxInfo>
        <Slider slides={data.photos_paths} />
        <Description>{data.description}</Description>
        <BoxButtons>
          <SecondaryButton
            content='Conversar no WhatsApp'
            style={{ ...boxStyle, width: '40%' }}
            onClick={() => openWhatsApp(data.owner.cell)}
          />
          <PrimaryButton
            content={`Conversar no Chat`}
            style={{ ...boxStyle, width: '60%' }}
          />
        </BoxButtons>
      </Container>
    </Wrapper>
  );
};
