import React from 'react';
import { Container, File } from './InputFile.styles.ts';

type InputFileProps = React.ComponentProps<'input'> & {
  id: string;
  label: string;
  span?: number;
};

export const InputFile = ({
  span = 1,
  id,
  label,
  ...props
}: InputFileProps) => {
  return (
    <Container style={{ gridColumn: `span ${span}` }}>
      <label htmlFor={id}>
        {label}
        <File id={id} type='file' {...props} />
      </label>
    </Container>
  );
};
