import React from 'react';
import { Wrapper, Container } from './ModalFeedback.styles.ts';
import { BiCheck } from 'react-icons/bi';
import { PrimaryButton } from '../Form/PrimaryButton/PrimaryButton.tsx';

type ModalFeedbackProps = {
  message: string;
};

export const ModalFeedback = ({ message }: ModalFeedbackProps) => {
  return (
    <Wrapper>
      <Container>
        <p style={{ textAlign: 'center', padding: '0 0 1% 0' }}>{message}</p>
        <PrimaryButton content='Ok' />
      </Container>
    </Wrapper>
  );
};
