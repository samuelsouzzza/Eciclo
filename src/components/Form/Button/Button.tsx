import React from 'react';
import { Btn } from './Button.styles.ts';

type BtnProps = React.ComponentProps<'button'> & {
  content: string;
  span: number;
};

export const Button = ({ content, span = 1, ...props }: BtnProps) => {
  return (
    <Btn style={{ gridColumn: `span ${span}` }} {...props}>
      {content}
    </Btn>
  );
};
