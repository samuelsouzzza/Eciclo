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
import { IFeedback, IPublicationImgs, IUser } from '../../@types/types';
import { useNavigate } from 'react-router-dom';
import { SpinLoader } from '../SpinLoader/SpinLoader.tsx';

export const ModalNewPublication = () => {
  const navigate = useNavigate();

  const arrCategories = [
    'Celular',
    'Notebook',
    'Placa eletrônica',
    'Monitores',
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
  const [category, setCategory] = React.useState(arrCategories[0]);
  const txtTitle = useForm(null);
  const [collectReceipt, setCollectReceipt] = React.useState(arrOptionsSend[0]);
  const [description, setDescription] = React.useState('');
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

  async function createNewPublication(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const userLogged: IUser = JSON.parse(
      localStorage.getItem('userLogged') as string
    );

    if (
      // txtTitle.validate() &&
      // description.length >= 1 &&
      // publicationPics &&
      publicationPics
    ) {
      const newPublication = {
        title: txtTitle.value,
        category,
        collect_receipt: collectReceipt,
        description,
        owner: {
          complete_name: `${userLogged.name} ${userLogged.surname}`,
          cell: userLogged.cell,
        },
      };
      const formDataPublication = new FormData();
      formDataPublication.append('publication', JSON.stringify(newPublication));

      for (const image of publicationPics) {
        if (image.raw)
          formDataPublication.append('publication_photos', image.raw);
      }

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
        setShowFeed(true);
        setShowModalNewPublication(false);
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
        <form
          onSubmit={createNewPublication}
          method='post'
          encType='multipart/form-data'
        >
          <Input
            id='titlePublication'
            type='text'
            label='Título'
            length={35}
            {...txtTitle}
          />
          <SelectBox
            id='categoryPublication'
            label='Categoria'
            options={arrCategories}
            value={category}
            setValue={setCategory}
          />
          <SelectBox
            id='sendPublication'
            label='Envio/Retirada'
            options={arrOptionsSend}
            value={collectReceipt}
            setValue={setCollectReceipt}
          />
          <TextArea
            id='descriptionPublication'
            label='Descrição'
            limit={200}
            value={description}
            setValue={setDescription}
          />
          <InputFile
            id='photosPublication'
            label='Fotos'
            accept='image/*'
            name='publication_photos'
            multiple
            preview={publicationPics}
            showPic={!!publicationPics}
            onChange={loadPictures}
          />
          <div>
            <SecondaryButton content='Cancelar' onClick={closeModal} />
            {loadingNewPublication ? (
              <SpinLoader size={25} color='#92e3a9' />
            ) : (
              <PrimaryButton content='Criar' />
            )}
          </div>
          {statusNewPublication && <Feedback text={statusNewPublication} />}
        </form>
      </BoxForm>
    </Container>
  );
};
