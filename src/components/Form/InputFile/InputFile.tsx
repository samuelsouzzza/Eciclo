import React from 'react';
import {
  Container,
  File,
  PreviewContainer,
  PreviewImg,
} from './InputFile.styles.ts';
import { IPublicationImgs } from '../../../@types/types';
import { Invalid } from '../Invalid/Invalid.tsx';

type InputFileProps = React.ComponentProps<'input'> & {
  id: string;
  label: string;
  preview?: IPublicationImgs[] | string | null;
  showPic?: boolean;
  span?: number;
  radius?: number;
};

export const InputFile = ({
  span = 1,
  id,
  label,
  preview,
  showPic,
  radius = 5,
  ...props
}: InputFileProps) => {
  return (
    <Container style={{ gridColumn: `span ${span}` }}>
      <label htmlFor={id}>
        {label}
        {preview?.length === 0 && (
          <Invalid
            text=' - Escolha no mínimo uma foto e no máximo 5'
            color='#e0d026'
          />
        )}
        <File id={id} type='file' {...props} />
      </label>
      <PreviewContainer>
        {preview !== null && typeof preview !== 'undefined' ? (
          Array.isArray(preview) ? (
            preview.map((pre, i) => (
              <PreviewImg
                key={i}
                src={pre.preview}
                alt='Imagens selecionadas manualmente'
                style={{ borderRadius: `${radius}%` }}
              />
            ))
          ) : (
            <PreviewImg
              src={preview}
              alt='Foto de perfil selecionada'
              style={{ borderRadius: `${radius}%` }}
            />
          )
        ) : null}
      </PreviewContainer>
    </Container>
  );
};
