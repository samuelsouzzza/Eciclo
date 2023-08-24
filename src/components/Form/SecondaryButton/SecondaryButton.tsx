import React from 'react';
import { SecBtn } from './SecondaryButton.styles.ts';

type BtnProps = React.ComponentProps<'button'> & {
  content: string;
  span?: number;
};

export const SecondaryButton = ({ content, span = 1, ...props }: BtnProps) => {
  return (
    <SecBtn style={{ gridColumn: `span ${span}` }} {...props}>
      {content}
    </SecBtn>
  );
};
