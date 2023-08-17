import React from 'react';
import { Btn } from './Button.styles.ts';

type BtnProps = React.ComponentProps<'button'> & {
  content: string;
};

export const Button = ({ content, ...props }: BtnProps) => {
  return <Btn {...props}>{content}</Btn>;
};
