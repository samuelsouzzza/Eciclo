import React from 'react';
import useForm from '../../../public/hooks/useForm.ts';
import { Wrapper, Container, BoxForm } from './NewAccount.styles.ts';
import { Input } from '../Form/Input/Input';
import { Button } from '../Form/Button/Button.tsx';
import { Title } from '../Title/Title.tsx';
import { Separate } from '../Separate/Separate.tsx';
import ImgNewAccount from '../../../public/new_account-illustration.svg';
import { BackBtn } from '../BackBtn/BackBtn.tsx';
import { useNavigate } from 'react-router-dom';

export const NewAccount = () => {
  const filPhoto = useForm(false);
  const txtName = useForm(null);
  const txtSobrenome = useForm(false);
  const txtCpf = useForm(null);
  const txtEmail = useForm('email');
  const txtCell = useForm(null);
  const txtCellSec = useForm(false);
  const txtBirth = useForm(null);
  const txtStreet = useForm(null);
  const txtNum = useForm(null);
  const txtCep = useForm('cep');
  const txtNeighborhood = useForm(null);
  const txtCity = useForm(null);
  const txtState = useForm(null);

  const navigate = useNavigate();

  function backPage(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    navigate('/');
  }

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
          <BackBtn text='Voltar' onClick={backPage} />
          <Title text='Criando conta como cliente' />
        </div>
        <img src={ImgNewAccount} alt='' />
        <form action=''>
          <h3>Dados pessoais</h3>
          <BoxForm>
            <Input label='Foto' id='photo' type='file' span={5} {...filPhoto} />
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
            <Input
              label='Rua'
              id='street'
              type='text'
              span={2}
              {...txtStreet}
            />
            <Input label='Número' id='number' type='number' {...txtNum} />
            <Input label='CEP' id='cep' type='text' span={2} {...txtCep} />
            <Input
              label='Bairro'
              id='neighborhood'
              type='text'
              span={2}
              {...txtNeighborhood}
            />
            <Input label='Cidade' id='city' type='text' span={2} {...txtCity} />
            <Input label='Estado' id='state' type='text' {...txtState} />
          </BoxForm>
          <Button content='Criar nova conta' span={5} />
        </form>
      </Container>
    </Wrapper>
  );
};
