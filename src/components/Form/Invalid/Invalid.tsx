import React from 'react';
import { I } from './Invalid.styles.ts';

interface InvalidProps {
  text: string;
  color?: string;
}

export const Invalid = ({ text, color = '#e04026' }: InvalidProps) => {
  return <I style={{ color: color }}>{text}</I>;
};
