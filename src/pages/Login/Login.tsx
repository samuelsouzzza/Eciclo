import React from 'react';
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
    try {
      const response = await fetch('http://localhost:3000/userLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: txtUser.value,
          password: txtPassword.value,
        }),
      });

      if (!response.ok) {
        throw new Error('Não foi possível entrar.');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      setLoginError('Não foi possível entrar.');
      throw error;
    }
  }

  React.useEffect(() => {
    setLoginError(null);
  }, [txtUser.value, txtPassword.value]);

  React.useEffect(() => {
    if (userLogged) {
      localStorage.setItem('userLogged', JSON.stringify(userLogged));
      navigate('/home');
    } else if (txtUser.value && txtPassword.value) {
      setLoginError('Verifique as credenciais de acesso.');
    }
  }, [userLogged, navigate]);

  async function logon(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();

    try {
      const infoLogin = await findUser();

      if (infoLogin) {
        setUserLogged(infoLogin);
      } else {
        throw new Error('Verifique as credenciais de acesso.');
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
            <form onSubmit={logon} method='post'>
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
