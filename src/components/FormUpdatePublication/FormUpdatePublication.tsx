import React from 'react';
import { Container } from './FormUpdatePublication.styles.ts';
import { IPublication } from '../../@types/types';
import { Input } from '../Form/Input/Input.tsx';
import { SelectBox } from '../Form/SelectBox/SelectBox.tsx';
import { TextArea } from '../Form/TextArea/TextArea.tsx';
import { InputFile } from '../Form/InputFile/InputFile.tsx';
import { IPublicationImgs } from '../../@types/types';
import { PrimaryButton } from '../Form/PrimaryButton/PrimaryButton.tsx';
import { SecondaryButton } from '../Form/SecondaryButton/SecondaryButton.tsx';
import { SpinLoader } from '../SpinLoader/SpinLoader.tsx';
import useForm from '../../hooks/useForm.ts';

type FormUpdatePublicationProps = {
  data: IPublication;
  onCancel: () => void;
};

export const FormUpdatePublication = ({
  data,
  onCancel,
}: FormUpdatePublicationProps) => {
  const arrCategories = ['Celular', 'Notebook', 'Hardware'];
  const arrOptionsSend = [
    'Fatec Registro',
    'Prefeitura de Registro',
    'CRAS Registro',
    'Combinar entrega',
  ];
  const txtTitle = useForm(null);
  const [category, setCategory] = React.useState(data.category);
  const [sendRecept, setSendRecept] = React.useState(data.collect_receipt);
  const [description, setDescription] = React.useState(data.description);
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

  const [loadingNewPublication, setLoadingNewPublication] =
    React.useState(false);

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
  console.log(publicationPics);

  return (
    <Container>
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
        value={sendRecept}
        setValue={setSendRecept}
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
        <SecondaryButton content='Cancelar' onClick={onCancel} />
        {loadingNewPublication ? (
          <SpinLoader size={25} />
        ) : (
          <PrimaryButton content='Atualizar' />
        )}
      </div>
    </Container>
  );
};
