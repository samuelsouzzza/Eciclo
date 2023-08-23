import React from 'react';
import useForm from '../../../public/hooks/useForm.ts';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Container, BoxForm, BoxLinks } from './Login.styles.ts';
import { Input } from '../../components/Form/Input/Input.tsx';
import { PrimaryButton } from '../../components/Form/PrimaryButton/PrimaryButton.tsx';
import { Anchor } from '../../components/Anchor/Anchor.tsx';
import ImgLogin from '../../../public/login-illustration.svg';

export const Login = () => {
  const txtUser = useForm(false);
  const txtPassword = useForm(false);
  const navigate = useNavigate();

  function logon(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    if (txtUser.value === 'sam' && txtPassword.value === 'sam')
      navigate('./home');
  }

  function toNewAccount(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    navigate('./new_account');
  }

  return (
    <Wrapper>
      <Container>
        <img src={ImgLogin} alt='Imagem de Login' />
        <BoxForm>
          <form onSubmit={logon}>
            <Input label='Usuário' id='user' type='text' {...txtUser} />
            <Input label='Senha' id='pass' type='text' {...txtPassword} />
            <PrimaryButton content='Entrar' />
          </form>
          <BoxLinks>
            <Anchor content='Não tenho conta' onClick={toNewAccount} />
            <Anchor content='Perdeu a senha?' />
          </BoxLinks>
        </BoxForm>
      </Container>
    </Wrapper>
  );
};
