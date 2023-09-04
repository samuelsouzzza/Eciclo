import React from 'react';

type TitleProps = React.ComponentProps<'h1'> & {
  text: string;
};

const styles: React.CSSProperties = {
  fontSize: '1.75rem',
  fontWeight: 'bold',
  margin: '3% 0 5% 0',
  width: '100%',
};

export const Title = ({ text }: TitleProps) => {
  return <h1 style={styles}>{text}</h1>;
};
