import React, { useState } from 'react';

type ValidationType = 'cpf' | 'email' | 'cep' | 'cell' | 'pass';

interface ValidationRule {
  regex?: RegExp;
  compare?: (field: string, compareField: string) => boolean;
  message: string;
}

interface ValidationTypes {
  [key: string]: ValidationRule;
}

const types: ValidationTypes = {
  cpf: {
    regex: /^(?!000\.?0?0?0\.?0?0?0-?0?0?$)(\d{3}\.?){2}\d{3}-?\d{2}$/,
    message: 'CPF inválido',
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido',
  },
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido',
  },
  cell: {
    regex: /^(\(?\d{2}\)?\s?)?(\d{4,5}-?\d{4})$/,
    message: 'Celular inválido',
  },
  pass: {
    regex:
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{7,}$/,
    message: 'Senha inválida',
  },
};

interface FormValues {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  error: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => boolean;
  validate: () => boolean;
  compare: (compareValue: string) => boolean;
}

const useForm = (type: ValidationType | null | false): FormValues => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  function compare(compareValue: string): boolean {
    if (value !== compareValue) {
      setError('As senhas devem ser idênticas');
      return false;
    }
    return true;
  }

  function validate(value: string): boolean {
    if (type === false) return true;
    if (type === null && value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (type && types[type] && !types[type].regex?.test(value)) {
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
    compare: (compareValue) => compare(compareValue),
  };
};

export default useForm;
