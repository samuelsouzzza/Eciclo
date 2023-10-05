import React from 'react';
import { Container, P } from './MenuMyPublications.styles.ts';
import { BackBtn } from '../BackBtn/BackBtn.tsx';
import { Title } from '../Title/Title.tsx';
import { UseContextScreens } from '../../global/ScreenStates.tsx';
import { handlerMenus } from '../../utils/handlerMenus.ts';
import { MyPublication } from '../MyPublication/MyPublication.tsx';
import useFetch from '../../hooks/useFetch.ts';
import { IPublication, IUser } from '../../@types/types';
import { timerFormatter } from '../../utils/timerFormatter.ts';
import { ModalActions } from '../ModalActions/ModalActions.tsx';
import { BiError } from 'react-icons/bi';
import { FormUpdatePublication } from '../FormUpdatePublication/FormUpdatePublication.tsx';

export const MenuMyPublications = () => {
  const { setShowFeed, setShowMenuMyPublications } = UseContextScreens();
  const [showModalDelete, setShowModalDelete] = React.useState(false);
  const [selectedPublication, setSelectedPublication] =
    React.useState<IPublication | null>(null);
  const [showListPublications, setShowListPublications] = React.useState(true);

  const publications = useFetch<IPublication[]>(
    'http://localhost:3000/publications'
  );

  const userLogged: IUser | null = JSON.parse(
    localStorage.getItem('userLogged') as string
  );

  const publicationsFiltred: IPublication[] | undefined = publications.data
    ?.filter((publication) => publication.owner.id == userLogged?.id)
    .reverse();

  function closeMenu() {
    handlerMenus([setShowFeed], [setShowMenuMyPublications]);
  }

  function deletePublication() {
    console.log('Excluiu a publicação!');
  }

  function updatePublication(publication: IPublication) {
    setShowListPublications(false);
    setSelectedPublication(publication);
  }

  function cancelUpdatePublication() {
    setShowListPublications(true);
    setSelectedPublication(null);
  }

  return (
    <>
      <Container>
        {showListPublications && (
          <>
            <div>
              <BackBtn text='Voltar' onClick={closeMenu} />
              <Title text='Minhas publicações' size={1.25} />
            </div>
            {publicationsFiltred?.length === 0 && <P>Não há publicações</P>}
            {publications.loading && <p>Carregando...</p>}
            {showListPublications &&
              publicationsFiltred?.map((publication) => {
                const datePublication = new Date(publication.opening_date);
                const dateNow = new Date();
                return (
                  <MyPublication
                    key={publication.id}
                    id={publication.id}
                    title={publication.title}
                    dateCreation={timerFormatter(datePublication, dateNow)}
                    onDelete={() => setShowModalDelete(true)}
                    onEdit={() => updatePublication(publication)}
                  />
                );
              })}
          </>
        )}
        {selectedPublication && (
          <>
            <BackBtn text='Cancelar' onClick={cancelUpdatePublication} />
            <Title text='Editando publicação' size={1.25} />
            <FormUpdatePublication
              data={selectedPublication}
              onCancel={cancelUpdatePublication}
            />
          </>
        )}
      </Container>

      {showModalDelete && (
        <ModalActions
          action='confirm'
          message='Tem certeza que deseja excluir esta publicação?'
          onClose={() => setShowModalDelete(false)}
          onConfirm={() => deletePublication()}
          icon={<BiError className='i' />}
        />
      )}
    </>
  );
};
