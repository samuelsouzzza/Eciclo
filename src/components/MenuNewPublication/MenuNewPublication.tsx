import React from 'react';
import { Container, BoxForm } from './MenuNewPublication.styles.ts';
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
import { IFeedback, IPublicationImgs, IUser } from '../../@types/types';
import { SpinLoader } from '../SpinLoader/SpinLoader.tsx';
import { ModalFeedback } from '../ModalFeedback/ModalFeedback.tsx';
import { BiCheck, BiMessageError } from 'react-icons/bi';
import { handlerMenus } from '../../utils/handlerMenus.ts';

export const MenuNewPublication = () => {
  const arrCategories = ['Celular', 'Notebook', 'Hardware'];
  const arrOptionsSend = [
    'Fatec Registro',
    'Prefeitura de Registro',
    'CRAS Registro',
    'Combinar entrega',
  ];
  const { setShowFeed, setShowMenuNewPublication } = UseContextScreens();
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

  function closeMenu() {
    handlerMenus(setShowFeed, [setShowMenuNewPublication]);
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

  function handleClickModalFeedback() {
    setShowFeed(true);
    setShowMenuNewPublication(false);
  }

  async function createNewPublication(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const userLogged: IUser = JSON.parse(
      localStorage.getItem('userLogged') as string
    );

    if (
      txtTitle.validate() &&
      description.length >= 1 &&
      publicationPics &&
      publicationPics?.length >= 1
    ) {
      const newPublication = {
        title: txtTitle.value,
        category,
        collect_receipt: collectReceipt,
        description,
        owner: {
          id: userLogged.id,
          complete_name: `${userLogged.name} ${userLogged.surname}`,
          cell: userLogged.cell,
          profile: userLogged.profile_path,
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
      } catch (err) {
        if (err instanceof Error) setStatusNewPublication(err.message);
      } finally {
        setLoadingNewPublication(false);
      }
    } else {
      setStatusNewPublication(
        'Verifique se todos os campos foram preenchidos corretamente.'
      );
    }
  }

  return (
    <Container>
      <BackBtn text='Cancelar' onClick={closeMenu} />
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
            <SecondaryButton content='Cancelar' onClick={closeMenu} />
            {loadingNewPublication ? (
              <SpinLoader size={25} />
            ) : (
              <PrimaryButton content='Criar' />
            )}
          </div>
        </form>
      </BoxForm>
      {statusNewPublication &&
        (statusNewPublication !== 'Publicação criada com sucesso!' ? (
          <ModalFeedback
            icon={<BiMessageError className='i' />}
            message={statusNewPublication}
            onClose={() => setStatusNewPublication(null)}
          />
        ) : (
          <ModalFeedback
            icon={<BiCheck className='i' />}
            message={statusNewPublication}
            onClose={handleClickModalFeedback}
          />
        ))}
    </Container>
  );
};
