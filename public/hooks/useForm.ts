import React from 'react';

type ValidationType = 'cep' | 'email';

interface ValidationRule {
  regex: RegExp;
  message: string;
}

interface ValidationTypes {
  [key: string]: ValidationRule;
}

const types: ValidationTypes = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido',
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido',
  },
};

interface FormValues {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  error: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => boolean;
  validate: () => boolean;
}

const useForm = (type: ValidationType | false): FormValues => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);

  function validate(value: string): boolean {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>): void {
    if (error) validate(event.target.value);
    setValue(event.target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
