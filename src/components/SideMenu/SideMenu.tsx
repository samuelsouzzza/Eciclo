import React from 'react';
import { Container } from './SideMenu.styles.ts';
import {
  BiPlus,
  BiUser,
  BiBell,
  BiListUl,
  BiCommentDetail,
  BiQuestionMark,
  BiBookmarkHeart,
  BiDotsVertical,
} from 'react-icons/bi';
import { UseContextScreens } from '../../global/ScreenStates.tsx';

export const SideMenu = () => {
  const { setShowFeed, setShowModalNewPublication } = UseContextScreens();

  function createNewPublication() {
    setShowFeed(false);
    setShowModalNewPublication(true);
  }

  return (
    <Container>
      <BiPlus className='i new' onClick={createNewPublication} />
      <BiUser className='i' />
      <BiBell className='i' />
      <BiBookmarkHeart className='i' />
      <BiListUl className='i' />
      <BiCommentDetail className='i' />
      <BiQuestionMark className='i' />
      <BiDotsVertical className='i' />
    </Container>
  );
};
