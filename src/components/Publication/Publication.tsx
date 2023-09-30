import React from 'react';
import {
  Container,
  Description,
  Category,
  Local,
  Author,
  B,
} from './Publication.styles.ts';
import { PrimaryButton } from '../Form/PrimaryButton/PrimaryButton.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCompass } from '@fortawesome/free-regular-svg-icons';

type PublicationProps = {
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
  owner: string;
  adress: string;
};

export const Publication = ({
  icon,
  title,
  category,
  description,
  owner,
  adress,
}: PublicationProps) => {
  return (
    <Container>
      <div>
        {icon}
        <h4>{title}</h4>
      </div>
      <Category>{category}</Category>
      <B>
        <Author>
          <FontAwesomeIcon icon={faUser} className='i' />
          {owner}
        </Author>
        <Local>
          <FontAwesomeIcon icon={faCompass} className='i' />
          {adress}
        </Local>
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
