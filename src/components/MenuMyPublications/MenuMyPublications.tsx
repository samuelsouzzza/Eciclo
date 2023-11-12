import React from 'react';
import {
  Container,
  P,
  BoxHeader,
  BoxData,
} from './MenuMyPublications.styles.ts';
import { BackBtn } from '../BackBtn/BackBtn.tsx';
import { Title } from '../Title/Title.tsx';
import { UseContextScreens } from '../../global/ScreenStates.tsx';
import { handlerMenus } from '../../utils/handlerMenus.ts';
import { MyPublication } from '../MyPublication/MyPublication.tsx';
import { IPublication, IUser } from '../../@types/types';
import { timerFormatter } from '../../utils/timerFormatter.ts';
import { ModalActions } from '../ModalActions/ModalActions.tsx';
import { BiCheck, BiError } from 'react-icons/bi';
import { FormUpdatePublication } from '../FormUpdatePublication/FormUpdatePublication.tsx';
import { SelectBox } from '../Form/SelectBox/SelectBox.tsx';
import { ModalDetailsPublication } from '../ModalDetailsPublication/ModalDatailsPublication.tsx';
import { IFeedback } from '../../@types/types';
import { SpinLoader } from '../SpinLoader/SpinLoader.tsx';
import { SkeletonPublicationLoader } from '../SkeletonPublicationLoader/SkeletonPublicationLoader.tsx';

export const MenuMyPublications = () => {
  const {
    setShowFeed,
    setShowMenuMyPublications,
    showDetails,
    setShowDetails,
    setShowFeedback,
  } = UseContextScreens();
  const [modalDelete, setModalDelete] = React.useState<IPublication | null>(
    null
  );
  const [selectedPublication, setSelectedPublication] =
    React.useState<IPublication | null>(null);
  const [showListPublications, setShowListPublications] = React.useState(true);
  const [statusPublication, setStatusPublication] = React.useState('abertas');
  const [publicationsFiltred, setPublicationsFiltred] = React.useState<
    IPublication[] | null
  >(null);
  const [loadingMyPublications, setLoadingMyPublications] =
    React.useState(false);

  async function getMyPublications() {
    try {
      setLoadingMyPublications(true);
      const response = await fetch(
        `http://localhost:3000/myPublications/${userLogged?.cpf}/${
          statusPublication == 'abertas' ? true : false
        }`
      );
      const data: IPublication[] = await response.json();
      setPublicationsFiltred(data);
    } catch (error) {
      console.log('Não foi possível encontrar as publicaçãoes no servidor.');
      throw error;
    } finally {
      setLoadingMyPublications(false);
    }
  }

  React.useEffect(() => {
    getMyPublications();
  }, [statusPublication, showListPublications]);

  const userLogged: IUser | null = JSON.parse(
    localStorage.getItem('userLogged') as string
  );

  function closeMenu() {
    handlerMenus([setShowFeed], [setShowMenuMyPublications]);
  }

  async function deletePublication(idPublicaton: string) {
    try {
      const response = await fetch(
        `http://localhost:3000/deletePublication/${idPublicaton}`,
        {
          method: 'DELETE',
        }
      );
      const feedback: IFeedback = await response.json();
      setShowFeedback(feedback);
    } catch {
      console.log('Não foi possível excluir a publicação.');
    } finally {
      setModalDelete(null);
    }
  }

  function handleUpdatePublication(publication: IPublication) {
    setShowListPublications(false);
    setSelectedPublication(publication);
  }

  function cancelUpdatePublication() {
    setShowListPublications(true);
    setSelectedPublication(null);
  }

  return (
    <>
      {showDetails && <ModalDetailsPublication data={showDetails} />}
      <Container>
        {showListPublications && (
          <>
            <BoxHeader>
              <BackBtn text='Voltar' onClick={closeMenu} />
              <Title text='Minhas publicações' size={1.25} />
            </BoxHeader>
            <SelectBox
              label='Ver publicações'
              id='optStatusPublication'
              value={statusPublication}
              setValue={setStatusPublication}
              options={['Abertas', 'Fechadas']}
            />
            <BoxData>
              {loadingMyPublications && <SpinLoader size={50} />}
              {!loadingMyPublications && publicationsFiltred?.length === 0 && (
                <P>Não há publicações</P>
              )}
              {!loadingMyPublications &&
                showListPublications &&
                publicationsFiltred?.map((publication, i) => {
                  const datePublication = new Date(publication.opening_date);
                  const dateNow = new Date();
                  return (
                    <div key={publication._id}>
                      <MyPublication
                        id={i + 1}
                        title={publication.title}
                        dateCreation={timerFormatter(datePublication, dateNow)}
                        onDelete={() => setModalDelete(publication)}
                        onEdit={() => handleUpdatePublication(publication)}
                        onDetails={() => setShowDetails(publication)}
                      />
                    </div>
                  );
                })}
            </BoxData>
          </>
        )}
        {selectedPublication && (
          <>
            <div className='header'>
              <BackBtn text='Cancelar' onClick={cancelUpdatePublication} />
              <Title text='Editando publicação' size={1.25} />
            </div>
            <FormUpdatePublication
              data={selectedPublication}
              onCancel={cancelUpdatePublication}
            />
          </>
        )}
      </Container>
      {modalDelete && (
        <ModalActions
          action='confirm'
          message='Tem certeza que deseja excluir esta publicação?'
          onClose={() => setModalDelete(null)}
          onConfirm={() => deletePublication(modalDelete._id)}
          icon={<BiError className='i' />}
        />
      )}
    </>
  );
};
