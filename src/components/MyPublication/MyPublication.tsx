import React from 'react';
import { Container, T, Temp } from './MyPublication.styles.ts';
import {
  faPenToSquare,
  faSquareMinus,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type MyPublicationProps = {
  id: number;
  title: string;
  dateCreation: string;
  onDelete: () => void;
  onEdit: () => void;
  onDetails: () => void;
};

export const MyPublication = ({
  id,
  title,
  dateCreation,
  onDelete,
  onEdit,
  onDetails,
}: MyPublicationProps) => {
  return (
    <Container>
      <T onClick={onDetails}>
        {id} - {title}
      </T>
      <div>
        <Temp>{dateCreation}</Temp>
        <FontAwesomeIcon icon={faPenToSquare} className='i' onClick={onEdit} />
        <FontAwesomeIcon
          icon={faSquareMinus}
          className='i'
          onClick={onDelete}
        />
      </div>
    </Container>
  );
};
