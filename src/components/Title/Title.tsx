import React from 'react';
import { T } from './Title.styles.ts';

type TitleProps = React.ComponentProps<'h1'> & {
  text: string;
};

export const Title = ({ text }: TitleProps) => {
  return <T>{text}</T>;
};
