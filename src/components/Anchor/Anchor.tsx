import React from 'react';
import { Anch } from './Anchor.styles.ts';

type AnchorProps = React.ComponentProps<'a'> & {
  content: string;
};

export const Anchor = ({ content, ...props }: AnchorProps) => {
  return <Anch {...props}>{content}</Anch>;
};
