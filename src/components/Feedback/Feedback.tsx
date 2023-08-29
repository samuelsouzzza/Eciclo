import React from 'react';
interface FeedbackProps {
  text: string;
}
const styles: React.CSSProperties = {
  fontSize: '.75rem',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  margin: '0',
  width: '100%',
  textAlign: 'center',
  color: 'green',
};

export const Feedback = ({ text }: FeedbackProps) => {
  return <p style={styles}>{text}</p>;
};
