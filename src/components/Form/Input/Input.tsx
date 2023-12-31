import React from 'react';
import { InputText } from './Input.styles';
import { Invalid } from '../Invalid/Invalid';

interface InputProps {
  id: string;
  label?: string;
  value?: string;
  type: string;
  span?: number;
  length?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
  onBlur?: () => void;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  value,
  type,
  span = 1,
  length,
  onChange,
  error,
  onBlur,
  placeholder,
}) => {
  return (
    <>
      <label
        htmlFor={id}
        style={{
          gridColumn: `span ${span}`,
          width: '100%',
        }}
      >
        {label}
        {error && <Invalid text={' - ' + error} />}
        <InputText
          type={type}
          id={id}
          name={id}
          value={value}
          maxLength={length}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      </label>
    </>
  );
};
