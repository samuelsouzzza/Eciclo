import React from 'react';
import { Container, BoxForm } from './NewAccount.styles.ts';
import { Wrapper } from '../Login/Login.styles';
import { Input } from '../Form/Input/Input';

export const NewAccount = () => {
  return (
    <Wrapper>
      <Container>
        <BoxForm>
          <Input label='Nome' className='txtName' />
          <Input label='Último nome' />
          <Input label='E-mail' type='email' />
          <Input label='Celular' />
          <Input label='Rua' />
          <Input label='Número' />
          <Input label='Bairro' />
          <Input label='Cidade' />
          <Input label='Estado' />
        </BoxForm>
      </Container>
    </Wrapper>
  );
};
