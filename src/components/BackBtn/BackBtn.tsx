import React from 'react';
import { B } from './BackBtn.styles.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

type BackBtnProps = React.ComponentProps<'button'> & {
  text: string;
};

export const BackBtn = ({ text, ...props }: BackBtnProps) => {
  return (
    <B {...props}>
      <FontAwesomeIcon icon={faChevronLeft} />
      {text}
    </B>
  );
};
