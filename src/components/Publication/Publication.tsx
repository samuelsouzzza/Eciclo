import React from 'react';
import {
  Container,
  Description,
  Category,
  Author,
} from './Publication.styles.ts';
import { PrimaryButton } from '../Form/PrimaryButton/PrimaryButton.tsx';

interface PublicationProps {
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
}

export const Publication = ({
  icon,
  title,
  category,
  description,
}: PublicationProps) => {
  return (
    <Container>
      <div>
        {icon}
        <h4>{title}</h4>
      </div>
      <Description>
        <Category>{category}</Category>
        <Author>Samuel Souza - Fatec Registro</Author>
        {description}
      </Description>
      <PrimaryButton
        content='Saber mais'
        style={{
          fontSize: '.85rem',
          height: '80%',
          padding: '1% 0',
          margin: '2% 0',
          fontWeight: 'bold',
        }}
      />
    </Container>
  );
};
