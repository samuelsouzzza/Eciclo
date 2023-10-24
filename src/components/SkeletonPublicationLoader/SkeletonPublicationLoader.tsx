import roleReact from 'react';
import { Container } from './SkeletonPublicationLoader.styles.ts';

export const SkeletonPublicationLoader = ({ ...props }) => {
  return (
    <>
      <Container></Container>
      <Container></Container>
      <Container></Container>
      <Container></Container>
    </>
  );
};
