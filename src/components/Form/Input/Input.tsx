import React from 'react';
import { InputText, Invalid } from './Input.styles';

interface InputProps {
  id: string;
  label: string;
  value: string;
  type: string;
  span?: number;
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
  span = 1,
  onChange,
  error,
  onBlur,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={id} style={{ gridColumn: `span ${span}` }}>
        {label}
        {error && <Invalid> - {error}</Invalid>}
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
    </>
  );
};
