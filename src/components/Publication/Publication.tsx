import React from 'react';
import { Container, Img } from './Publication.styles.ts';
import { PrimaryButton } from '../Form/PrimaryButton/PrimaryButton.tsx';

interface PublicationProps {
  img: string;
  title: string;
  description: string;
}

export const Publication = ({ img, title, description }: PublicationProps) => {
  return (
    <Container>
      <Img src={img} alt='Foto da publicação' />
      <h4>{title}</h4>
      <p>{description}</p>
      <PrimaryButton content='Saber mais' style={{ fontSize: '1rem' }} />
    </Container>
  );
};
