import React from 'react';
import { Container } from './FormUpdatePublication.styles.ts';
import { IPublication, IUser } from '../../@types/types';
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
  const [loadingNewPublication, setLoadingNewPublication] =
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
        owner: {
          _id: userLogged._id as string,
          complete_name: `${userLogged.name} ${userLogged.surname}`,
          cell: userLogged.cell,
          profile: userLogged.profile_path ? userLogged.profile_path : null,
          cpf: userLogged.cpf,
        },
      };

      const formData = new FormData();
      formData.append(
        'updatingPublication',
        JSON.stringify(updatedPublication)
      );

      for (const image of publicationPics) {
        if (image.raw) formData.append('publication_photos', image.raw);
      }

      console.log(updatedPublication);

      // const response = await fetch(`http://localhost:3000/updatePublication`);
    }
  }

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
        {loadingNewPublication ? (
          <SpinLoader size={25} />
        ) : (
          <PrimaryButton content='Atualizar' onClick={updatePublication} />
        )}
      </div>
    </Container>
  );
};
