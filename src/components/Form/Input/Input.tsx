import React from 'react';
import { InputText } from './Input.styles.ts';

type InputTextProps = React.ComponentProps<'input'> & {
  label: string;
  mask?: string;
  span?: number;
};

export const Input = ({
  name,
  label,
  mask,
  span = 1,
  ...props
}: InputTextProps) => {
  return (
    <label htmlFor={name} style={{ gridColumn: `span ${span}` }}>
      {label}
      <InputText id={name} placeholder={mask} {...props} />
    </label>
  );
};
