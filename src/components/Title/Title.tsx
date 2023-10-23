import React from 'react';

type TitleProps = React.ComponentProps<'h1'> & {
  text: string;
};

export const Title = ({ text, size = 1.5, ...props }: TitleProps) => {
  return (
    <T style={{ fontSize: `${size}rem` }} {...props}>
      {text}
    </T>
  );
