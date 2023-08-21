import React from 'react';
import useForm from '../../../public/hooks/useForm.ts';
import { Wrapper, Container, BoxForm } from './NewAccount.styles.ts';
import { Input } from '../Form/Input/Input';
import { Button } from '../Form/Button/Button.tsx';
import { Title } from '../Title/Title.tsx';
import { Separate } from '../Separate/Separate.tsx';
import ImgNewAccount from '../../../public/new_account-illustration.svg';
import { BackBtn } from '../BackBtn/BackBtn.tsx';

export const NewAccount = () => {
  const txtName = useForm(false);
  const txtSobrenome = useForm(false);
  const txtCpf = useForm(false);
  const txtEmail = useForm('email');
  const txtCell = useForm(false);
  const txtCellSec = useForm(false);
  const txtBirth = useForm(false);

  return (
    <Wrapper>
      <Container>
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'start',
            fontSize: '1.75rem',
          }}
        >
          <BackBtn />
          <Title text='Criando conta como cliente' />
        </div>
        <img src={ImgNewAccount} alt='' />
        <form action=''>
          <h3>Dados pessoais</h3>
          <BoxForm>
            {/* <Input label='Foto' type='file' span={5} />
            <Input label='Nome *' span={3} />
            <Input label='Sobrenome *' span={2} />
            <Input label='CPF *' span={2} />
            <Input label='Email *' span={3} />
            <Input label='Celular *' span={2} />
            <Input label='Celular secundário' span={2} />
            <Input label='Nascimento *' /> */}
            <Input label='Nome' id='name' type='text' span={3} {...txtName} />
            <Input
              label='Sobrenome'
              id='sob_name'
              type='text'
              span={2}
              {...txtSobrenome}
            />
            <Input label='CPF' id='cpf' type='text' span={2} {...txtCpf} />
            <Input
              label='E-Mail'
              id='email'
              type='email'
              span={3}
              {...txtEmail}
            />
            <Input
              label='Celular'
              id='cell'
              type='text'
              span={2}
              {...txtCell}
            />
            <Input
              label='Celular secundário'
              id='cell_sec'
              type='text'
              span={2}
              {...txtCellSec}
            />
            <Input label='Nascimento' id='birth' type='date' {...txtBirth} />
          </BoxForm>
          <Separate />
          <h3>Endereço</h3>
          <BoxForm>
            {/* <Input label='Rua *' span={2} />
            <Input label='Número' />
            <Input label='CEP *' span={2} />
            <Input label='Bairro *' span={2} />
            <Input label='Cidade *' span={2} />
            <Input label='Estado *' span={1} /> */}
          </BoxForm>
          <Button content='Criar nova conta' span={5} />
        </form>
      </Container>
    </Wrapper>
  );
};
