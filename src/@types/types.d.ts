export interface IFeedback {
  message: string;
  status: number;
}
export interface IUser {
  name: string;
  surname: string;
  cpf: string;
  email: string;
  cell: string;
  password: string;
}
export interface IProfileImg {
  preview: string;
  raw: File | null;
}
export interface IPublicationImgs {
  preview: string;
  raw: File | null;
}
