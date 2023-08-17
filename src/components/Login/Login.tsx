import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Container, BoxForm, BoxLinks } from './Login.styles.ts';
import { Input } from './../Form/Input/Input.tsx';
import { Button } from '../Form/Button/Button.tsx';
import { Anchor } from '../Anchor/Anchor.tsx';
import ImgLogin from '../../../public/login-illustration.svg';

export const Login = () => {
  const [valueUser, setValueUser] = React.useState('');
  const [valuePassword, setValuePassWord] = React.useState('');
  const navigate = useNavigate();

  function logon(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    if (valueUser === 'sam' && valuePassword === 'sam') navigate('./home');
  }
  function toNewAccount(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    navigate('./new_account');
    console.log('click');
  }

  return (
    <Wrapper>
      <Container>
        <img src={ImgLogin} alt='Imagem de Login' />
        <BoxForm>
          <form onSubmit={logon}>
            <Input
              mask='@usuário'
              type='text'
              label='Nome:'
              value={valueUser}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValueUser(e.currentTarget.value)
              }
            />

            <Input
              mask='*********'
              type='password'
              label='Senha:'
              value={valuePassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValuePassWord(e.currentTarget.value)
              }
            />
            <Button content='Entrar' />
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
