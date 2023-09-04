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
import { BackBtn } from '../BackBtn/BackBtn.tsx';

export interface IPublicationImgs {
  preview: string;
  raw: File | null;
}

export const ModalNewPublication = () => {
  const arrCategories = [
    'Celular',
    'Notebook',
    'Placa',
    'Televisão',
    'Monitor',
  ];
  const arrOptionsSend = [
    'Fatec Registro',
    'Prefeitura de Registro',
    'CRAS Registro',
    'Combinar entrega',
  ];
  const { setShowFeed, setShowModalNewPublication } = UseContextScreens();
  const [categorie, setCategorie] = React.useState(arrCategories[0]);
  const [optSend, setOptSend] = React.useState(arrOptionsSend[0]);
  const [describe, setDescribe] = React.useState('');
  const [publicationPics, setpublicationPics] = React.useState<
    IPublicationImgs[] | null
  >([]);

  function closeModal() {
    setShowModalNewPublication(false);
    setShowFeed(true);
  }

  function loadPictures(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { files } = e.target;
    if (files !== null && files.length > 0) {
      setpublicationPics((...prevPublicationPics) =>
        Array.from(files).map((file) => ({
          preview: URL.createObjectURL(file),
          raw: file,
        }))
      );
    }
  }

  React.useEffect(() => {
    console.log(publicationPics);
  }, [publicationPics]);

  return (
    <Container>
      <BackBtn text='Cancelar' onClick={closeModal} />
      <Title text='Criar nova publicação' />
      <BoxForm>
        <Input id='titlePublication' type='text' label='Título' />
        <SelectBox
          id='categoriePublication'
          label='Categoria'
          options={arrCategories}
          value={categorie}
          setValue={setCategorie}
        />
        <SelectBox
          id='sendPublication'
          label='Envio/Retirada'
          options={arrOptionsSend}
          value={optSend}
          setValue={setOptSend}
        />
        <TextArea
          id='describePublication'
          label='Descrição'
          limit={200}
          value={describe}
          setValue={setDescribe}
        />
        <InputFile
          id='photosPublication'
          label='Fotos'
          accept='image/*'
          multiple
          preview={publicationPics}
          showPic={!!publicationPics}
          onChange={loadPictures}
        />
        <div>
          <SecondaryButton content='Cancelar' onClick={closeModal} />
          <PrimaryButton content='Criar' />
        </div>
      </BoxForm>
    </Container>
  );
};
