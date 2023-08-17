import React from 'react';
import { Container, BoxForm } from './NewAccount.styles.ts';
import { Wrapper } from '../Login/Login.styles';
import { Input } from '../Form/Input/Input';

export const NewAccount = () => {
  return (
    <Wrapper>
      <Container>
        <BoxForm>
          <Input label='Nome' />
          <Input label='Último nome' />
          <Input label='E-mail' />
          <Input label='E-mail' />
        </BoxForm>
      </Container>
    </Wrapper>
  );
};
