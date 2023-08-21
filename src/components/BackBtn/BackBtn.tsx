import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const styles: React.CSSProperties = {
  border: '0',
  backgroundColor: 'transparent',
  marginRight: '2%',
  fontSize: '1rem',
  width: '10%',
  cursor: 'pointer',
};

interface BackBtnProps {
  text: string;
}

export const BackBtn = ({ text }: BackBtnProps) => {
  return (
    <button style={styles}>
      <FontAwesomeIcon icon={faChevronLeft} />
      {text}
    </button>
  );
};
