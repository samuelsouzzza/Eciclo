export interface IFeedback {
  message: string;
  status: number;
}
export interface IUser {
  id: number;
  name: string;
  surname: string;
  cpf: string;
  email: string;
  cell: string;
  password: string;
  profile_path: string | null;
}
export interface IPublication {
  id: number;
  title: string;
  category: string;
  description: string;
  opening_date: string;
  closing_date: string | null;
  status: boolean;
  photos_path: string[];
  owner: {
    id: number;
    complete_name: string;
    cell: string;
    profile: string | null;
  };
}
export interface IProfileImg {
  preview: string;
  raw: File | null;
}
export interface IPublicationImgs {
  preview: string;
  raw: File | null;
}
