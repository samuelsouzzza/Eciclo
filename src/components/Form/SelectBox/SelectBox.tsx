import React from 'react';
import { Box } from './SelectBox.styles.ts';

type SelectBoxProps = React.ComponentProps<'select'> & {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
};

export const SelectBox = ({
  value,
  setValue,
  options,
  ...props
}: SelectBoxProps) => {
  return (
    <Box
      value={value}
      onChange={({ target }) => setValue(target.value)}
      {...props}
    >
      {options.map((op) => (
        <option key={op} value={op}>
          {op.toUpperCase()}
        </option>
      ))}
    </Box>
  );
};
