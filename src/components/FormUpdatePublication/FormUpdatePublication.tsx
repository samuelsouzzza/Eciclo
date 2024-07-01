import React from 'react';
import { Container } from './FormUpdatePublication.styles.ts';
import { IFeedback, IPublication, IUser } from '../../@types/types';
import { Input } from '../Form/Input/Input.tsx';
import { SelectBox } from '../Form/SelectBox/SelectBox.tsx';
import { TextArea } from '../Form/TextArea/TextArea.tsx';
import { InputFile } from '../Form/InputFile/InputFile.tsx';
import { IPublicationImgs } from '../../@types/types';
import { PrimaryButton } from '../Form/PrimaryButton/PrimaryButton.tsx';
import { SecondaryButton } from '../Form/SecondaryButton/SecondaryButton.tsx';
import { SpinLoader } from '../SpinLoader/SpinLoader.tsx';
import useForm from '../../hooks/useForm.ts';
import { ModalActions } from '../ModalActions/ModalActions.tsx';
import { UseContextScreens } from '../../global/ScreenStates.tsx';
import { BiMessageError } from 'react-icons/bi';

type FormUpdatePublicationProps = {
  data: IPublication;
  onCancel: () => void;
};

export const FormUpdatePublication = ({
  data,
  onCancel,
}: FormUpdatePublicationProps) => {
  const { showFeedback, setShowFeedback } = UseContextScreens();
  const arrCategories = ['Celular', 'Notebook', 'Hardware'];
  const arrOptionsSend = [
    'Fatec Registro',
    'Prefeitura de Registro',
    'CRAS Registro',
    'Combinar entrega',
  ];
  const txtTitle = useForm(null);
  const [category, setCategory] = React.useState(data.category);
  const [collectReceipt, setCollectReceipt] = React.useState(
    data.collect_receipt
  );
  const [txtDescription, setTxtDescription] = React.useState(data.description);
  const [publicationPics, setPublicationPics] = React.useState<
    IPublicationImgs[] | null
  >(
    data.photos_paths
      ? data.photos_paths.map((photoPath) => ({
          preview: `http://localhost:3000/${photoPath}`,
          raw: null,
        }))
      : null
  );
  const [loadingUpdatingPublication, setLoadingUpdatingPublication] =
    React.useState(false);

  const userLogged: IUser = JSON.parse(
    localStorage.getItem('userLogged') as string
  );

  function loadPictures(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { files } = e.target;
    if (files !== null && files.length > 0) {
      setPublicationPics((...prevPublicationPics) =>
        Array.from(files).map((file) => ({
          preview: URL.createObjectURL(file),
          raw: file,
        }))
      );
    }
  }

  async function updatePublication() {
    if (
      txtTitle.validate() &&
      txtDescription.length >= 1 &&
      publicationPics &&
      publicationPics?.length >= 1 &&
      publicationPics?.length <= 5 &&
      userLogged
    ) {
      const updatedPublication = {
        title: txtTitle.value,
        category,
        collect_receipt: collectReceipt,
        description: txtDescription,
      };

      const formData = new FormData();
      formData.append(
        'updatingPublication',
        JSON.stringify(updatedPublication)
      );

      for (const image of publicationPics) {
        if (image.raw) formData.append('publication_photos', image.raw);
      }

      async function fetchDataPublication() {
        const response = await fetch(
          `http://localhost:3000/updatePublication/${data._id}`,
          {
            method: 'PUT',
            body: formData,
          }
        );
        const feedback: IFeedback = await response.json();

        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }

        return feedback;
      }

      try {
        setLoadingUpdatingPublication(true);
        const feedback = await fetchDataPublication();
        setShowFeedback(feedback);
      } catch (error) {
        if (error instanceof Error) {
          console.error('Ocorreu algum erro no servidor:', error);
          setShowFeedback({
            status: 500,
            message: error.message || 'Ocorreu algum erro no servidor.',
          });
        }
      } finally {
        setLoadingUpdatingPublication(false);
        onCancel();
      }
    }
  }

  return (
    <Container>
      {showFeedback && (
        <ModalActions
          action='ok'
          icon={<BiMessageError className='i' />}
          message={showFeedback.message}
          onClose={() => setShowFeedback(null)}
        />
      )}

      <Input
        label='Título'
        type='text'
        id='txtTitle'
        placeholder={data.title}
        {...txtTitle}
        onChange={(e) => txtTitle.setValue(e.target.value)}
      />
      <SelectBox
        label='Categoria'
        options={arrCategories}
        id='categoryPublication'
        value={category}
        setValue={setCategory}
      />
      <SelectBox
        label='Envio/Retirada'
        options={arrOptionsSend}
        id='categoryPublication'
        value={collectReceipt}
        setValue={setCollectReceipt}
      />
      <TextArea
        id='descriptionPublication'
        label='Descrição'
        limit={500}
        value={txtDescription}
        setValue={setTxtDescription}
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
        <SecondaryButton content='Cancelar' onClick={onCancel} />
        {loadingUpdatingPublication ? (
          <SpinLoader size={25} />
        ) : (
          <PrimaryButton content='Atualizar' onClick={updatePublication} />
        )}
      </div>
    </Container>
  );
};
