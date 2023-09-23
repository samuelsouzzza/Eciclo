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
import { handlerMenus } from '../../utils/handlerMenus.ts';

export const SideMenu = () => {
  const { setShowFeed, setShowMenuNewPublication, setShowMenuMyPublications } =
    UseContextScreens();

  function createNewPublication() {
    handlerMenus(setShowMenuNewPublication, [
      setShowFeed,
      setShowMenuMyPublications,
    ]);
  }
  function myPublications() {
    handlerMenus(setShowMenuMyPublications, [
      setShowFeed,
      setShowMenuNewPublication,
    ]);
  }

  return (
    <Container>
      <BiPlus className='i new' onClick={createNewPublication} />
      <BiUser className='i' />
      <BiListUl className='i' onClick={myPublications} />
      <BiBell className='i' />
      <BiBookmarkHeart className='i' />
      <BiCommentDetail className='i' />
      <BiQuestionMark className='i' />
      <BiDotsVertical className='i' />
    </Container>
  );
};
