import React from 'react';
import { Container, Check } from './CheckBox.styles.ts';

type CheckBoxProps = React.ComponentProps<'input'> & {
  label: string;
  span?: number;
};

export const CheckBox = ({ label, span = 1 }: CheckBoxProps) => {
  return (
    <Container style={{ gridColumn: `span ${span}` }}>
      <label htmlFor='check' />
      <Check id='check' type='checkbox' />
      {label}
    </Container>
  );
};
