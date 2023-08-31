import React from 'react';
import { Container, BoxForm } from './ModalNewPublication.styles.ts';
import { Title } from '../Title/Title.tsx';
import { Input } from '../Form/Input/Input.tsx';
import { SelectBox } from '../Form/SelectBox/SelectBox.tsx';
import { InputFile } from '../Form/InputFile/InputFile.tsx';
import { PrimaryButton } from '../Form/PrimaryButton/PrimaryButton.tsx';
import { SecondaryButton } from '../Form/SecondaryButton/SecondaryButton.tsx';

export const ModalNewPublication = () => {
  const arrCategories = [
    'Celular',
    'Notebook',
    'Placa',
    'Televisão',
    'Monitor',
  ];

  const [categorie, setCategorie] = React.useState(arrCategories[0]);

  return (
    <Container>
      <Title text='Criar nova publicação' />
      <BoxForm>
        <Input id='titlePublication' type='text' label='Título' span={3} />
        <SelectBox
          id='categoriePublication'
          label='Categoria'
          span={2}
          options={arrCategories}
          value={''}
          setValue={setCategorie}
        />
        <Input
          id='descriptionPublication'
          type='text'
          label='Descrição'
          span={5}
        />
        <InputFile id='photosPublication' label='Fotos' span={5} />
        <SecondaryButton content='Cancelar' span={2} />
        <PrimaryButton content='Criar' span={3} />
      </BoxForm>
    </Container>
  );
};
