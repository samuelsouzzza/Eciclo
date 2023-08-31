import React from 'react';
import { Area } from './TextArea.styles.ts';

type TextAreaProps = React.ComponentProps<'textarea'> & {
  label?: string;
  span?: number;
  lines?: number;
  limit?: number;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const TextArea = ({
  id,
  span,
  lines = 3,
  label,
  limit,
  value,
  setValue,
  ...props
}: TextAreaProps) => {
  return (
    <label
      htmlFor={id}
      style={{
        gridColumn: `span ${span}`,
        width: '100%',
      }}
    >
      {label}
      <Area
        rows={lines}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        maxLength={limit}
        {...props}
      />
      <p
        style={{
          width: '100%',
          textAlign: 'right',
          color: value.length === limit ? '#e04026ed' : 'currentcolor',
        }}
      >
        {value.length}/{limit}
      </p>
    </label>
  );
};
