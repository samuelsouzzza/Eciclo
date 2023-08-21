import React from 'react';
import { InputText } from './Input.styles';

interface InputProps {
  id: string;
  label: string;
  value: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | null;
  onBlur: () => void;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  value,
  type,
  onChange,
  error,
  onBlur,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={id}>
        {label}
        <InputText
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      </label>
      {error && <p>{error}</p>}
    </>
  );
};
