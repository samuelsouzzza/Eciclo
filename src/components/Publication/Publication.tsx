import React from 'react';
import { Container, Description, Type } from './Publication.styles.ts';
import { PrimaryButton } from '../Form/PrimaryButton/PrimaryButton.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface PublicationProps {
  icon: IconProp;
  title: string;
  type: string;
  description: string;
}

export const Publication = ({
  icon,
  title,
  type,
  description,
}: PublicationProps) => {
  return (
    <Container>
      <h4>
        <FontAwesomeIcon icon={icon} /> {title}
      </h4>
      <Description>
        <Type>{type}</Type>
        {description}
      </Description>
      <PrimaryButton
        content='Saber mais'
        style={{
          fontSize: '.85rem',
          height: '80%',
          padding: '1% 0',
          fontWeight: 'bold',
        }}
      />
    </Container>
  );
};
