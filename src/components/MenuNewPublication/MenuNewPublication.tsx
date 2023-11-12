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
import { handlerMenus } from '../../utils/handlerMenus.ts';

export const MenuNewPublication = () => {
  const arrCategories = ['Celular', 'Notebook', 'Hardware'];
  const arrOptionsSend = [
    'Fatec Registro',
    'Prefeitura de Registro',
    'CRAS Registro',
    'Combinar entrega',
  ];
  const {
    setShowFeed,
    setShowMenuNewPublication,
    showFeedback,
    setShowFeedback,
  } = UseContextScreens();
  const [category, setCategory] = React.useState(arrCategories[0]);
  const txtTitle = useForm(null);
  const [collectReceipt, setCollectReceipt] = React.useState(arrOptionsSend[0]);
  const [description, setDescription] = React.useState('');
  const [publicationPics, setpublicationPics] = React.useState<
    IPublicationImgs[] | null
  >([]);
  const [loadingNewPublication, setLoadingNewPublication] =
    React.useState(false);

  function closeMenu() {
    handlerMenus([setShowFeed], [setShowMenuNewPublication]);
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
    handlerMenus([setShowFeed], [setShowMenuNewPublication]);
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
      publicationPics?.length >= 1 &&
      publicationPics?.length <= 5
    ) {
      const newPublication = {
        title: txtTitle.value,
        category,
        collect_receipt: collectReceipt,
        description,
        owner: {
          _id: userLogged._id,
          complete_name: `${userLogged.name} ${userLogged.surname}`,
          cell: userLogged.cell,
          profile: userLogged.profile_path,
          cpf: userLogged.cpf,
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
        return feedback;
      }

      try {
        setLoadingNewPublication(true);
        setShowFeedback(await postPublication());
        setShowMenuNewPublication(false);
        handlerMenus([setShowFeed], [setShowMenuNewPublication]);
      } catch (err) {
        console.log('Não foi possível criar a publicação.');
      } finally {
        setLoadingNewPublication(false);
      }
    }
  }

  return (
    <>
      <Container>
        <div className='header'>
          <BackBtn text='Cancelar' onClick={closeMenu} />
          <Title text='Criar nova publicação' />
        </div>
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
              limit={500}
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
      </Container>
    </>
  );
};
