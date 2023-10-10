import React from 'react';
import { T } from './Title.styles.ts';

type TitleProps = React.ComponentProps<'h1'> & {
  text: string;
  size?: number;
};

export const Title = ({ text, size = 1.5, ...props }: TitleProps) => {
  return (
    <T style={{ fontSize: `${size}rem` }} {...props}>
      {text}
    </T>
  );
};
