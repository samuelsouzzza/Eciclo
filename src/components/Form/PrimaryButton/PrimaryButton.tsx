import React, { Children } from 'react';
import { Btn } from './PrimaryButton.styles.ts';

type BtnProps = React.ComponentProps<'button'> & {
  content?: string;
  span?: number;
};

export const PrimaryButton = ({
  children,
  content,
  span = 1,
  ...props
}: BtnProps) => {
  return (
    <Btn style={{ gridColumn: `span ${span}` }} {...props}>
      {content ? content : children}
    </Btn>
  );
};
