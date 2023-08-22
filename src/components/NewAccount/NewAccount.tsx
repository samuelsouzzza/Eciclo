import React from 'react';
import useForm from '../../../public/hooks/useForm.ts';
import { Wrapper, Container, BoxForm } from './NewAccount.styles.ts';
import { Input } from '../Form/Input/Input';
import { InputFile } from '../Form/InputFile/InputFile.tsx';
import { Button } from '../Form/Button/Button.tsx';
import { SelectBox } from '../Form/SelectBox/SelectBox.tsx';
import { CheckBox } from '../Form/CheckBox/CheckBox.tsx';
import { Title } from '../Title/Title.tsx';
import { Separate } from '../Separate/Separate.tsx';
import ImgNewAccount from '../../../public/new_account-illustration.svg';
import { BackBtn } from '../BackBtn/BackBtn.tsx';
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
  const txtSobrenome = useForm(false);
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

  const navigate = useNavigate();

  React.useEffect(() => {
    setProfilePic(null);
  }, []);

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
        <form action=''>
          <h3>Dados pessoais</h3>
          <BoxForm>
            <InputFile
              id='profile_photo'
              span={5}
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
              span={2}
              {...txtSobrenome}
            />
            <Input label='CPF *' id='cpf' type='text' span={2} {...txtCpf} />
            <Input
              label='E-Mail *'
              id='email'
              type='email'
              span={3}
              {...txtEmail}
            />
            <Input
              label='Celular *'
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
            <Input label='Nascimento *' id='birth' type='date' {...txtBirth} />
          </BoxForm>
          <Separate />
          <h3>Endereço</h3>
          <BoxForm>
            <Input
              label='Rua *'
              id='street'
              type='text'
              span={2}
              {...txtStreet}
            />
            <Input label='Número' id='number' type='number' {...txtNum} />
            <Input label='CEP *' id='cep' type='text' span={2} {...txtCep} />
            <Input
              label='Bairro *'
              id='neighborhood'
              type='text'
              span={2}
              {...txtNeighborhood}
            />
            <Input
              label='Cidade *'
              id='city'
              type='text'
              span={2}
              {...txtCity}
            />
            <SelectBox
              value={txtState}
              setValue={setTxtState}
              options={arrStates}
            />
          </BoxForm>
          <Separate />
          <h3>Termos e condições</h3>
          <BoxForm>
            <CheckBox
              label='Estou de acordo com os termos e condições de uso do aplicativo'
              span={5}
            />
          </BoxForm>
          <Button content='Criar nova conta' span={5} />
        </form>
      </Container>
    </Wrapper>
  );
};
