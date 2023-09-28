import React from 'react';
import { Container } from './FormUpdatePublication.styles.ts';
import { Title } from '../Title/Title.tsx';
import { IPublication } from '../../@types/types';

type FormUpdatePublicationProps = {
  data: IPublication;
};

export const FormUpdatePublication = ({ data }: FormUpdatePublicationProps) => {
  return <Container>{data.title}</Container>;
};
