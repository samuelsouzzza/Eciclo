import React from 'react';
import { Container, File, PreviewContainer } from './InputFile.styles.ts';

type InputFileProps = React.ComponentProps<'input'> & {
  id: string;
  label: string;
  preview?: string;
  showPic?: boolean;
  span?: number;
};

export const InputFile = ({
  span = 1,
  id,
  label,
  preview,
  showPic,
  ...props
}: InputFileProps) => {
  return (
    <Container style={{ gridColumn: `span ${span}` }}>
      <label htmlFor={id}>
        {label}
        <File id={id} type='file' {...props} />
      </label>
      {showPic && preview && (
        <PreviewContainer src={preview} alt='Foto de perfil selecionada' />
      )}
    </Container>
  );
};
