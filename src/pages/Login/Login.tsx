import React from 'react';
import useFetch from '../../hooks/useFetch.ts';
import useForm from '../../hooks/useForm.ts';
import { Invalid } from '../../components/Form/Invalid/Invalid.tsx';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Container, BoxForm, BoxLinks } from './Login.styles.ts';
import { Input } from '../../components/Form/Input/Input.tsx';
import { PrimaryButton } from '../../components/Form/PrimaryButton/PrimaryButton.tsx';
import { Anchor } from '../../components/Anchor/Anchor.tsx';
import ImgLogin from '../../assets/login-illustration.svg';
import { IUser } from '../../@types/types';
import { HeadName } from '../../utils/HeadName.ts';

export const Login = () => {
  const txtUser = useForm(false);
  const txtPassword = useForm(false);
  const navigate = useNavigate();
  const [loginError, setLoginError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLoginError(null);
  }, [txtUser.value, txtPassword.value]);

  const users = useFetch<IUser[]>('http://localhost:3000/users');

  function logon(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    try {
      if (users) {
        const userLogged = users.data?.filter(
          (user) =>
            user.email === txtUser.value && user.password === txtPassword.value
        );

        if (userLogged?.length === 1) {
          localStorage.setItem('userLogged', JSON.stringify(userLogged[0]));

          navigate('./home');
        } else {
          throw new Error('Usuário e/ou senha incorretos');
        }
      }
    } catch (err) {
      if (err instanceof Error) setLoginError(err.message);
    }
  }

  function toNewAccount(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    navigate('./new_account');
  }

  return (
    <Wrapper>
      <HeadName
        title='E-Ciclo • Login'
        description='Esta é a página de login.'
      />
      <Container>
        <img src={ImgLogin} alt='Imagem de Login' />
        <BoxForm>
          <form onSubmit={logon}>
            <Input label='Usuário' id='user' type='text' {...txtUser} />
            <Input label='Senha' id='pass' type='text' {...txtPassword} />
            {loginError && <Invalid text={loginError} />}
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
