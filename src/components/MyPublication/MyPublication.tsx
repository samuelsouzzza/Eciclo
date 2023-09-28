import React from 'react';
import { Container, T, BtnDel, BtnEdit, Temp } from './MyPublication.styles.ts';
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
};

export const MyPublication = ({
  id,
  title,
  dateCreation,
  onDelete,
}: MyPublicationProps) => {
  return (
    <Container>
      <T>
        {id}. {title}
      </T>
      <div>
        <Temp>{dateCreation}</Temp>
        <FontAwesomeIcon icon={faPenToSquare} className='i' />
        <FontAwesomeIcon
          icon={faSquareMinus}
          className='i'
          onClick={onDelete}
        />
      </div>
    </Container>
  );
};
