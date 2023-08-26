import React from 'react';
import useForm from '../../hooks/useForm.ts';
import { Wrapper, Container, BoxForm } from './NewAccount.styles.ts';
import { Input } from '../../components/Form/Input/Input.tsx';
import { InputFile } from '../../components/Form/InputFile/InputFile.tsx';
import { PrimaryButton } from '../../components/Form/PrimaryButton/PrimaryButton.tsx';
import { SecondaryButton } from '../../components/Form/SecondaryButton/SecondaryButton.tsx';
import { CheckBox } from '../../components/Form/CheckBox/CheckBox.tsx';
import { Title } from '../../components/Title/Title.tsx';
import { Separate } from '../../components/Separate/Separate.tsx';
import ImgNewAccount from '../../../public/new_account-illustration.svg';
import { BackBtn } from '../../components/BackBtn/BackBtn.tsx';
import { useNavigate } from 'react-router-dom';

export const NewAccount = () => {
  interface IProfileImg {
    preview: string;
    raw: File | null;
  }

  const arrStates = ['sp', 'rj', 'mg'];

  const [profilePic, setProfilePic] = React.useState<IProfileImg | null>({
    preview: '',
    raw: null,
  });
  const txtName = useForm(null);
  const txtSurname = useForm(null);
  const txtCpf = useForm('cpf');
  const txtEmail = useForm('email');
  const txtCell = useForm('cell');
  const txtCellSec = useForm('cell');
  const txtBirth = useForm(null);
  const txtStreet = useForm(null);
  const txtNum = useForm(null);
  const txtCep = useForm('cep');
  const txtNeighborhood = useForm(null);
  const txtCity = useForm(null);
  const [txtState, setTxtState] = React.useState(arrStates[0]);
  const txtPass = useForm('pass');
  const txtConfirmPass = useForm(null);
  const [terms, setTerms] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    setProfilePic(null);
  }, []);

  React.useEffect(() => {
    txtConfirmPass.compare(txtPass.value);
  }, [txtPass, txtConfirmPass.value]);

  function backPage(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    navigate('/');
  }

  function loadPicture(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (e.target.files !== null) {
      setProfilePic({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  }

  function sendForm(event: React.FormEvent) {
    event.preventDefault();
    if (
      txtName.validate() &&
      txtSurname.validate() &&
      txtCpf.validate() &&
      txtEmail.validate() &&
      txtCell.validate() &&
      txtCellSec.validate() &&
      txtBirth.validate() &&
      txtStreet.validate() &&
      txtNum.validate() &&
      txtCep.validate() &&
      txtNeighborhood.validate() &&
      txtCity.validate() &&
      txtState &&
      txtPass.validate() &&
      txtConfirmPass.validate() &&
      terms
    ) {
      console.log('Todos os dados estão corretos');
    } else {
      console.log('Algum campo não foi validado corretamente');
    }
  }

  return (
    <Wrapper>
      <Container>
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'last baseline',
            justifyContent: 'start',
            fontSize: '1.75rem',
          }}
        >
          <BackBtn text='Voltar' onClick={backPage} />
          <Title text='Criando conta como cliente' />
        </div>
        <img
          src={ImgNewAccount}
          alt='Imagem de ilustração para criação de novas contas'
        />
        <form onSubmit={sendForm}>
          <h3>Dados pessoais</h3>
          <BoxForm>
            <InputFile
              id='profile_photo'
              span={6}
              label='Foto de perfil'
              accept='image/*'
              preview={profilePic?.preview}
              showPic={!!profilePic}
              onChange={loadPicture}
            />

            <Input label='Nome *' id='name' type='text' span={3} {...txtName} />
            <Input
              label='Sobrenome *'
              id='sob_name'
              type='text'
              span={3}
              {...txtSurname}
            />
            <Input label='CPF *' id='cpf' type='text' span={4} {...txtCpf} />
            <Input
              label='Celular *'
              id='cell'
              type='text'
              span={2}
              {...txtCell}
            />
            <Input
              label='E-Mail *'
              id='email'
              type='email'
              span={6}
              {...txtEmail}
            />
          </BoxForm>
          <Separate />
          <h3>Acesso</h3>
          <p>A senha deve conter, no mínimo: </p>
          <ul>
            <li>Seis dígitos</li>
            <li>Uma letra maiúscula</li>
            <li>Uma letra minúscula</li>
            <li>Um número</li>
            <li>Um caractere especial</li>
          </ul>

          <BoxForm>
            <Input
              label='Senha *'
              id='pass'
              type='password'
              span={3}
              {...txtPass}
            />
            <Input
              label='Confirme a senha *'
              id='confirmPass'
              type='password'
              span={3}
              {...txtConfirmPass}
            />
          </BoxForm>
          <Separate />
          <h3>Termos e condições</h3>
          <BoxForm>
            <CheckBox
              label='Estou de acordo com os termos e condições de uso do aplicativo'
              span={6}
              checked={terms}
              onChange={() => setTerms(!terms)}
              required
            />
            <SecondaryButton
              onClick={backPage}
              content='Cancelar cadastro'
              span={2}
            />
            <PrimaryButton content='Criar nova conta' span={4} />
          </BoxForm>
        </form>
      </Container>
    </Wrapper>
  );
};
