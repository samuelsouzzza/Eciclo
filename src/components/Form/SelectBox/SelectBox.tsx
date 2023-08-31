import React from 'react';
import { Box } from './SelectBox.styles.ts';

type SelectBoxProps = React.ComponentProps<'select'> & {
  id: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
  label?: string;
  span?: number;
};

export const SelectBox = ({
  id,
  value,
  setValue,
  options,
  label,
  span = 1,
  ...props
}: SelectBoxProps) => {
  return (
    <label htmlFor={id} style={{ gridColumn: `span ${span}` }}>
      {label}
      <Box
        id={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      >
        {options.map((op) => (
          <option key={op} value={op.toLowerCase()}>
            {op}
          </option>
        ))}
      </Box>
    </label>
  );
};
