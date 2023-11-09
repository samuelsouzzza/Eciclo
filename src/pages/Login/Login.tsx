import React from 'react';
import useFetch from '../../hooks/useFetch.ts';
import useForm from '../../hooks/useForm.ts';
import { Invalid } from '../../components/Form/Invalid/Invalid.tsx';
import { useNavigate } from 'react-router-dom';
import {
  Wrapper,
  ContentLogin,
  BoxContent,
  BoxLogo,
  BoxForm,
  BoxLinks,
} from './Login.styles.ts';
import { Input } from '../../components/Form/Input/Input.tsx';
import { PrimaryButton } from '../../components/Form/PrimaryButton/PrimaryButton.tsx';
import { Anchor } from '../../components/Anchor/Anchor.tsx';
import ImgLogin from '../../assets/login-illustration.svg';
import { IUser } from '../../@types/types';
import { HeadName } from '../../utils/HeadName.ts';
import { LogoMain } from '../../components/Logos/LogoMain.tsx';
import { Title } from '../../components/Title/Title.tsx';

export const Login = () => {
  const txtUser = useForm(false);
  const txtPassword = useForm(false);
  const navigate = useNavigate();
  const [loginError, setLoginError] = React.useState<string | null>(null);
  const [userLogged, setUserLogged] = React.useState<IUser | null>(null);

  async function findUser() {
    fetch('http://localhost:3000/loginUser', {
      method: 'post',
      body: JSON.stringify({
        email: 'rssamuel17@gmail.com',
        password: '$ouZ44rb',
      }),
    })
      .then((response) => response.json())
      .then((data) => setUserLogged(data))
      .catch(() => {
        setLoginError('Não foi possível entrar.');
        console.log(userLogged);
      });
  }

  React.useEffect(() => {
    setLoginError(null);
  }, [txtUser.value, txtPassword.value]);

  async function logon(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    try {
      await findUser();
      if (userLogged) {
        navigate('./home');
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
      <BoxContent>
        <BoxLogo>
          <LogoMain />
        </BoxLogo>
        <ContentLogin>
          <img src={ImgLogin} alt='Imagem de Login' />
          <BoxForm>
            <form onSubmit={logon}>
              <Title size={1.5} text='Login' />
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
        </ContentLogin>
      </BoxContent>
    </Wrapper>
  );
};
