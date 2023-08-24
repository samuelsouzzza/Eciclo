import React from 'react';
import useFetch from '../../hooks/useFetch.ts';
import useForm from '../../hooks/useForm.ts';
import { Invalid } from '../../components/Form/Input/Input.styles.ts';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Container, BoxForm, BoxLinks } from './Login.styles.ts';
import { Input } from '../../components/Form/Input/Input.tsx';
import { PrimaryButton } from '../../components/Form/PrimaryButton/PrimaryButton.tsx';
import { Anchor } from '../../components/Anchor/Anchor.tsx';
import ImgLogin from '../../../public/login-illustration.svg';

interface User {
  name: string;
  surname: string;
  cpf: string;
  email: string;
  cell: string;
  cell_secondary: string;
  birth: string;
  address: {
    street: string;
    number: number | null;
    cep: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  password: string;
}

export const Login = () => {
  const txtUser = useForm(false);
  const txtPassword = useForm(false);
  const navigate = useNavigate();
  const [loginError, setLoginError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLoginError(null);
  }, [txtUser.value, txtPassword.value]);

  const users = useFetch<User[]>('../../../api/users.json');
  // const users = useFetch<User[]>('http://localhost:3000/users');

  function logon(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    try {
      if (users) {
        const userLogged = users.data?.filter(
          (user) =>
            user.email === txtUser.value && user.password === txtPassword.value
        );

        if (userLogged?.length === 1) {
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
      <Container>
        <img src={ImgLogin} alt='Imagem de Login' />
        <BoxForm>
          <form onSubmit={logon}>
            <Input label='Usuário' id='user' type='text' {...txtUser} />
            <Input label='Senha' id='pass' type='text' {...txtPassword} />
            {loginError && <Invalid>{loginError}</Invalid>}
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
