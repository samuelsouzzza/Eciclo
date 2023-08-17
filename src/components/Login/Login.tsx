import React from 'react';
import { Wrapper, Container } from './Login.styles.ts';
import { Input } from './../Form/Input/Input.tsx';
import { Button } from '../Form/Button/Button.tsx';
import ImgLogin from '../../../public/login-illustration.svg';

export const Login = () => {
  const [valueUser, setValueUser] = React.useState('');
  const [valuePassword, setValuePassWord] = React.useState('');

  return (
    <Wrapper>
      <Container>
        <img src={ImgLogin} alt='Imagem de Login' />
        <form action=''>
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
          <Button />
        </form>
      </Container>
    </Wrapper>
  );
};
