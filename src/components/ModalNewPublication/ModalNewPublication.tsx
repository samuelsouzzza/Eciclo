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
import useForm from '../../hooks/useForm.ts';
import { Feedback } from '../Feedback/Feedback.tsx';
import { IFeedback, IPublicationImgs } from '../../@types/types';
import { useNavigate } from 'react-router-dom';

export const ModalNewPublication = () => {
  const navigate = useNavigate();

  const arrCategories = [
    'Celular',
    'Notebook',
    'Placa',
    'Televisão',
    'Monitor',
    'Kit',
  ];
  const arrOptionsSend = [
    'Fatec Registro',
    'Prefeitura de Registro',
    'CRAS Registro',
    'Combinar entrega',
  ];
  const { setShowFeed, setShowModalNewPublication } = UseContextScreens();
  const [categorie, setCategorie] = React.useState(arrCategories[0]);
  const txtTitle = useForm(null);
  const [optSend, setOptSend] = React.useState(arrOptionsSend[0]);
  const [describe, setDescribe] = React.useState('');
  const [publicationPics, setpublicationPics] = React.useState<
    IPublicationImgs[] | null
  >([]);
  const [statusNewPublication, setStatusNewPublication] = React.useState<
    string | null
  >(null);
  const [loadingNewPublication, setLoadingNewPublication] =
    React.useState(false);

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

  async function createNewPublication() {
    if (
      txtTitle.validate() &&
      describe.length >= 1 &&
      publicationPics &&
      publicationPics?.length >= 1
    ) {
      const newPublication = {
        title: txtTitle.value,
        categorie,
        optSend,
        describe,
      };

      const formDataPublication = new FormData();
      formDataPublication.append('publication', JSON.stringify(newPublication));
      formDataPublication.append(
        'publication_photos',
        JSON.stringify(publicationPics)
      );

      async function postPublication() {
        const response = await fetch('http://localhost:3000/publications', {
          method: 'post',
          body: formDataPublication,
        });
        const feedback: IFeedback = await response.json();
        if (feedback.status != 201)
          throw new Error('Não foi possível criar a publicação.');

        return feedback;
      }

      try {
        setLoadingNewPublication(true);
        setStatusNewPublication(null);
        setStatusNewPublication((await postPublication()).message);
        setLoadingNewPublication(false);
        navigate('/home');
      } catch (err) {
        if (err instanceof Error) setStatusNewPublication(err.message);
      } finally {
        setLoadingNewPublication(false);
      }
    } else {
      setStatusNewPublication('Não foi possível criar a publicação');
    }
  }

  return (
    <Container>
      <BackBtn text='Cancelar' onClick={closeModal} />
      <Title text='Criar nova publicação' />
      <BoxForm>
        <Input
          id='titlePublication'
          type='text'
          label='Título'
          length={35}
          {...txtTitle}
        />
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
          <PrimaryButton content='Criar' onClick={createNewPublication} />
        </div>
        {statusNewPublication && <Feedback text={statusNewPublication} />}
      </BoxForm>
    </Container>
  );
};
