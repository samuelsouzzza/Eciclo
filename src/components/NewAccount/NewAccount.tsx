import React from 'react';
import { Wrapper, Container, BoxForm } from './NewAccount.styles.ts';
import { Input } from '../Form/Input/Input';
import { Button } from '../Form/Button/Button.tsx';

export const NewAccount = () => {
  return (
    <Wrapper>
      <Container>
        <BoxForm>
          <form action=''>
            <Input label='Nome' span={3} />
            <Input label='Sobrenome' />
            <Input label='Sobrenome' />
            <Input label='Sobrenome' />
            <Button content='Criar nova conta' span={3} />
          </form>
        </BoxForm>
      </Container>
    </Wrapper>
  );
};
