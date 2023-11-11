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
import useFetch from '../../hooks/useFetch.ts';
import { IPublication, IUser } from '../../@types/types';
import { timerFormatter } from '../../utils/timerFormatter.ts';
import { ModalActions } from '../ModalActions/ModalActions.tsx';
import { BiError } from 'react-icons/bi';
import { FormUpdatePublication } from '../FormUpdatePublication/FormUpdatePublication.tsx';
import { SelectBox } from '../Form/SelectBox/SelectBox.tsx';
import { ModalDetailsPublication } from '../ModalDetailsPublication/ModalDatailsPublication.tsx';

export const MenuMyPublications = () => {
  const {
    setShowFeed,
    setShowMenuMyPublications,
    showDetails,
    setShowDetails,
  } = UseContextScreens();
  const [showModalDelete, setShowModalDelete] = React.useState(false);
  const [selectedPublication, setSelectedPublication] =
    React.useState<IPublication | null>(null);
  const [showListPublications, setShowListPublications] = React.useState(true);
  const [statusPublication, setStatusPublication] = React.useState('abertas');
  const [publicationsFiltred, setPublicationsFiltred] = React.useState<IPublication[] | null>(null)

  async function getMyPublications() {
    try {
      const response = await fetch(`http://localhost:3000/myPublications/${userLogged?.cpf}/${statusPublication == 'abertas' ? true : false}`)
      const data: IPublication[] = await response.json();
      setPublicationsFiltred(data)
    } catch (error) {
      console.log('Não foi possível encontrar as publicaçãoes no servidor.');
      throw error;
    }
  }

  React.useEffect(()=> {
    getMyPublications();
  }, [statusPublication])

  const userLogged: IUser | null = JSON.parse(
    localStorage.getItem('userLogged') as string
  );


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
              {!publicationsFiltred && <P>Não há publicações</P>}
              {/* {publications.loading && <p>Carregando...</p>} */}
              {showListPublications &&
                publicationsFiltred?.map((publication, i) => {
                  const datePublication = new Date(publication.opening_date);
                  const dateNow = new Date();
                  return (
                    <MyPublication
                      key={publication._id}
                      id={i + 1}
                      title={publication.title}
                      dateCreation={timerFormatter(datePublication, dateNow)}
                      onDelete={() => setShowModalDelete(true)}
                      onEdit={() => updatePublication(publication)}
                      onDetails={() => setShowDetails(publication)}
                    />
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
