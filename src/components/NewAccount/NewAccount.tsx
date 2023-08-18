import React from 'react';
import { Wrapper, Container, BoxForm } from './NewAccount.styles.ts';
import { Input } from '../Form/Input/Input';
import { Button } from '../Form/Button/Button.tsx';
import { Title } from '../Title/Title.tsx';

export const NewAccount = () => {
  return (
    <Wrapper>
      <Container>
        <form action=''>
          <Title text='Criando conta como cliente' />
          <h3>Dados pessoais</h3>
          <BoxForm>
            <Input label='Nome *' span={3} />
            <Input label='Sobrenome *' span={2} />
            <Input label='CPF *' span={2} />
            <Input label='Email *' span={3} />
            <Input label='Celular *' span={2} />
            <Input label='Celular secundário' span={2} />
            <Input label='Nascimento *' />
          </BoxForm>
          <div className='separate' />
          <h3>Endereço</h3>
          <BoxForm>
            <Input label='Rua *' span={2} />
            <Input label='Número' />
            <Input label='CEP *' span={2} />
            <Input label='Bairro *' span={2} />
            <Input label='Cidade *' span={2} />
            <Input label='Estado *' span={1} />
          </BoxForm>
          <Button content='Criar nova conta' span={5} />
        </form>
      </Container>
    </Wrapper>
  );
};
