import React from 'react';
import { Container } from './SideMenu.styles.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faBell,
  faBookmark,
  faComments,
} from '@fortawesome/free-regular-svg-icons';
import {
  faPlus,
  faQuestion,
  faEllipsisH,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import { UseContextScreens } from '../../global/ScreenStates.tsx';
import { handlerMenus } from '../../utils/handlerMenus.ts';

export const SideMenu = () => {
  const { setShowFeed, setShowMenuNewPublication, setShowMenuMyPublications } =
    UseContextScreens();

  function createNewPublication() {
    handlerMenus(
      [setShowMenuNewPublication],
      [setShowFeed, setShowMenuMyPublications]
    );
  }
  function myPublications() {
    handlerMenus(
      [setShowMenuMyPublications],
      [setShowFeed, setShowMenuNewPublication]
    );
  }

  return (
    <Container>
      <FontAwesomeIcon
        icon={faPlus}
        className='i new'
        onClick={createNewPublication}
      />
      <FontAwesomeIcon icon={faCircleUser} className='i' />
      <FontAwesomeIcon icon={faList} className='i' onClick={myPublications} />
      <FontAwesomeIcon icon={faBell} className='i' />
      <FontAwesomeIcon icon={faBookmark} className='i' />
      <FontAwesomeIcon icon={faComments} className='i' />
      <FontAwesomeIcon icon={faQuestion} className='i' />
      <FontAwesomeIcon icon={faEllipsisH} className='i' />
    </Container>
  );
};
