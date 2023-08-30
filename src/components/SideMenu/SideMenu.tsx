import React from 'react';
import { Container } from './SideMenu.styles.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faGear,
  faPlus,
  faQuestion,
  faComment,
  faListUl,
  faBell,
} from '@fortawesome/free-solid-svg-icons';

export const SideMenu = () => {
  return (
    <Container>
      <FontAwesomeIcon icon={faUser} className='i' />
      <FontAwesomeIcon icon={faPlus} className='i new' />
      <FontAwesomeIcon icon={faBell} className='i' />
      <FontAwesomeIcon icon={faListUl} className='i' />
      <FontAwesomeIcon icon={faComment} className='i' />
      <FontAwesomeIcon icon={faQuestion} className='i' />
      <FontAwesomeIcon icon={faGear} className='i' />
    </Container>
  );
};
