import React from 'react';
import { Container, BoxForm } from './ModalNewPublication.styles.ts';
import { Title } from '../Title/Title.tsx';
import { Input } from '../Form/Input/Input.tsx';
import { SelectBox } from '../Form/SelectBox/SelectBox.tsx';
import { InputFile } from '../Form/InputFile/InputFile.tsx';
import { TextArea } from '../Form/TextArea/TextArea.tsx';
import { PrimaryButton } from '../Form/PrimaryButton/PrimaryButton.tsx';
import { SecondaryButton } from '../Form/SecondaryButton/SecondaryButton.tsx';
import { UseContextScreens } from '../../global/ScreenStates.tsx';

export const ModalNewPublication = () => {
  const arrCategories = [
    'Celular',
    'Notebook',
    'Placa',
    'Televisão',
    'Monitor',
  ];
  const { setShowFeed, setShowModalNewPublication } = UseContextScreens();
  const [categorie, setCategorie] = React.useState(arrCategories[0]);
  const [describe, setDescribe] = React.useState('');

  function closeModal() {
    setShowModalNewPublication(false);
    setShowFeed(true);
  }

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
        <TextArea
          id='describePublication'
          span={5}
          label='Descrição'
          limit={200}
          value={describe}
          setValue={setDescribe}
        />
        <InputFile id='photosPublication' label='Fotos' span={5} />
        <SecondaryButton content='Cancelar' span={2} onClick={closeModal} />
        <PrimaryButton content='Criar' span={3} />
      </BoxForm>
    </Container>
  );
};
