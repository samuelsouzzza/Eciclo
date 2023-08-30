import React from 'react';
import { Container, Bar } from './SearchBar.styles.ts';
import { PrimaryButton } from '../Form/PrimaryButton/PrimaryButton.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
type SearchBoxProps = React.ComponentProps<'input'> & {};

export const SearchBar = ({ ...props }: SearchBoxProps) => {
  return (
    <Container>
      <Bar {...props} />
      <PrimaryButton style={{ height: '25px', width: '20%', fontSize: '1rem' }}>
        <FontAwesomeIcon icon={faSearch} />
      </PrimaryButton>
    </Container>
  );
};
