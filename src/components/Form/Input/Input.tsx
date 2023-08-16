import React from 'react';
import { InputText } from './Input.styles.ts';

type InputTextProps = React.ComponentProps<'input'> & {
  label: string;
  mask?: string;
};

export const Input = ({ name, label, mask, ...props }: InputTextProps) => {
  return (
    <label htmlFor={name}>
      {label}
      <InputText id={name} placeholder={mask} {...props} />
    </label>
  );
};
