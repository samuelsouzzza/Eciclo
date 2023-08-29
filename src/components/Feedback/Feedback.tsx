import React from 'react';

const styles: React.CSSProperties = {
  fontSize: '.75rem',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  margin: '0',
  width: '100%',
  textAlign: 'center',
  color: 'green',
};

export const Feedback = ({ children }: React.PropsWithChildren) => {
  return <p style={styles}>{children}</p>;
};
