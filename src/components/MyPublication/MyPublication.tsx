import React from 'react';
import { Container, T, BtnDel, BtnEdit, Temp } from './MyPublication.styles.ts';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PrimaryButton } from '../Form/PrimaryButton/PrimaryButton.tsx';

type MyPublicationProps = {
  id: number;
  title: string;
  dateCreation?: string;
};

export const MyPublication = ({
  id,
  title,
  dateCreation,
}: MyPublicationProps) => {
  return (
    <Container>
      <T>
        {id}. {title}
      </T>
      <div>
        <BtnDel>
          <FontAwesomeIcon icon={faTrash} />
        </BtnDel>
        <BtnEdit>
          <FontAwesomeIcon icon={faPen} />
        </BtnEdit>
        <Temp>3d</Temp>
        <PrimaryButton
          style={{ height: 'auto', fontSize: '0.75rem', padding: '0 5%' }}
          content='Fechar'
        />
      </div>
    </Container>
  );
};
