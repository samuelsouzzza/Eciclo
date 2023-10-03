import React from 'react';
import {
  Container,
  Description,
  Category,
  BoxInfo,
  B,
} from './Publication.styles.ts';
import { PrimaryButton } from '../Form/PrimaryButton/PrimaryButton.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faCompass,
  faClock,
} from '@fortawesome/free-regular-svg-icons';

type PublicationProps = {
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
  owner: string;
  adress: string;
  dateCreation: string;
};

export const Publication = ({
  icon,
  title,
  category,
  description,
  owner,
  adress,
  dateCreation,
}: PublicationProps) => {
  return (
    <Container>
      <div>
        {icon}
        <h4>{title}</h4>
      </div>
      <Category>{category}</Category>
      <B>
        <BoxInfo>
          <FontAwesomeIcon icon={faCircleUser} className='i' />
          {owner}
        </BoxInfo>
        <BoxInfo>
          <FontAwesomeIcon icon={faCompass} className='i' />
          {adress}
        </BoxInfo>
        <BoxInfo>
          <FontAwesomeIcon icon={faClock} className='i' />
          {dateCreation}
        </BoxInfo>
      </B>
      <Description>{description}</Description>

      <PrimaryButton
        content='Saber mais'
        style={{
          fontSize: '.85rem',
          height: 'min-content',
          padding: '1% 0',
          margin: '1% 0',
          fontWeight: 'bold',
        }}
      />
    </Container>
  );
};
