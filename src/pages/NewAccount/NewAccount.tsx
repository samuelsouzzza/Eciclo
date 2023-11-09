import React from 'react';
import useForm from '../../hooks/useForm.ts';
import {
  Wrapper,
  Container,
  BoxForm,
  BoxFormTemporary,
} from './NewAccount.styles.ts';
import { Input } from '../../components/Form/Input/Input.tsx';
import { InputFile } from '../../components/Form/InputFile/InputFile.tsx';
import { PrimaryButton } from '../../components/Form/PrimaryButton/PrimaryButton.tsx';
import { SecondaryButton } from '../../components/Form/SecondaryButton/SecondaryButton.tsx';
import { CheckBox } from '../../components/Form/CheckBox/CheckBox.tsx';
import { SelectBox } from '../../components/Form/SelectBox/SelectBox.tsx';
import { Title } from '../../components/Title/Title.tsx';
import { Separate } from '../../components/Separate/Separate.tsx';
import { Feedback } from '../../components/Feedback/Feedback.tsx';
import ImgNewAccount from '../../assets/new_account-illustration.svg';
import { BackBtn } from '../../components/BackBtn/BackBtn.tsx';
import { useNavigate } from 'react-router-dom';
import { IFeedback, IUser, IProfileImg } from '../../@types/types.ts';
import { SpinLoader } from '../../components/SpinLoader/SpinLoader.tsx';
import { ModalActions } from '../../components/ModalActions/ModalActions.tsx';
import { BiCheck, BiMessageError } from 'react-icons/bi';
import { HeadName } from '../../utils/HeadName.ts';

export const NewAccount = () => {
  const [profilePic, setProfilePic] = React.useState<IProfileImg | null>({
    preview: '',
    raw: null,
  });
  const txtName = useForm(null);
  const txtSurname = useForm(null);
  const txtCpf = useForm('cpf');
  const txtEmail = useForm('email');
  const txtCell = useForm('cell');
  const txtPass = useForm('pass');
  const txtConfirmPass = useForm(null);
  const [terms, setTerms] = React.useState(false);
  const [loadingNewUser, setLoadingNewUser] = React.useState(false);
  const [statusNewUser, setStatusNewUser] = React.useState<string | null>(null);
  const [showModalFeedback, setShowModalFeedback] = React.useState(true);
  const [typeUser, setTypeUser] = React.useState('doador/beneficiado');

  const navigate = useNavigate();

  React.useEffect(() => {
    setProfilePic(null);
  }, []);

  React.useEffect(() => {
    txtConfirmPass.compare(txtPass.value);
  }, [txtPass.value]);

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

  async function sendForm(event: React.FormEvent) {
    event.preventDefault();
    if (
      txtName.validate() &&
      txtSurname.validate() &&
      txtCpf.validate() &&
      txtEmail.validate() &&
      txtCell.validate() &&
      txtPass.validate() &&
      txtConfirmPass.validate() &&
      terms
    ) {
      const newUser: IUser = {
        id: 0,
        name: txtName.value,
        surname: txtSurname.value,
        cpf: txtCpf.value,
        email: txtEmail.value,
        cell: txtCell.value,
        password: txtPass.value,
      };

      const formData = new FormData();
      formData.append('user', JSON.stringify(newUser));

      if (profilePic?.raw) {
        formData.append('profilePic', profilePic.raw);
      }

      async function postUser() {
        const response = await fetch('http://localhost:3000/users', {
          method: 'post',
          body: formData,
        });
        const feedback: IFeedback = await response.json();
        if (feedback.status != 201)
          throw new Error('Não foi possível salvar o usuário.');

        return feedback;
      }

      try {
        setLoadingNewUser(true);
        setLoadingNewUser(false);
      } catch (err) {
        if (err instanceof Error) setStatusNewUser(err.message);
      } finally {
        setStatusNewUser((await postUser()).message);
        setShowModalFeedback(true);
        setLoadingNewUser(false);
      }
    } else {
      setStatusNewUser(
        'Verifique se todos os campos estão preenchidos corretamente'
      );
    }
  }
  return (
    <Wrapper>
      <HeadName
        title='E-Ciclo • Crie sua conta'
        description='Esta é a página de criação de contas.'
      />
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
          <Title text={`Criar conta como ${typeUser}`} size={1.5} />
        </div>
        <img
          src={ImgNewAccount}
          alt='Imagem de ilustração para criação de novas contas'
        />

        <form onSubmit={sendForm} method='post' encType='multipart/form-data'>
          <SelectBox
            id='typeUser'
            label='Cadastrar como'
            value={typeUser}
            setValue={setTypeUser}
            options={['Doador/Beneficiado', 'Ponto de Coleta']}
            span={6}
          />

          <Separate />

          <h3>Informações de cadastro</h3>
          {typeUser === 'doador/beneficiado' ? (
            <BoxForm>
              <InputFile
                id='profile_photo'
                span={6}
                label='Foto de perfil'
                accept='image/*'
                radius={50}
                preview={profilePic?.preview}
                showPic={!!profilePic}
                onChange={loadPicture}
              />
              <Input
                label='Nome *'
                id='name'
                type='text'
                span={3}
                {...txtName}
              />
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
          ) : (
            <BoxForm>
              <BoxFormTemporary>
                <span>Formulário de cadadastro de pontos de coleta</span>
              </BoxFormTemporary>
            </BoxForm>
          )}

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
            {loadingNewUser ? (
              <SpinLoader size={25} color='#92e3a9' />
            ) : (
              <PrimaryButton content='Criar nova conta' span={4} />
            )}
          </BoxForm>
        </form>
      </Container>
      {statusNewUser &&
        (statusNewUser !== 'Usuário criado com sucesso!' ? (
          <ModalActions
            action='ok'
            icon={<BiMessageError className='i' />}
            message={statusNewUser}
            onClose={() => setStatusNewUser(null)}
          />
        ) : (
          <ModalActions
            action='ok'
            icon={<BiCheck className='i' />}
            message={statusNewUser}
            onClose={() => navigate('/')}
          />
        ))}
    </Wrapper>
  );
};
