export interface IFeedback {
  message: string;
  status: number;
}
export interface IUser {
  _id?: string;
  name: string;
  surname: string;
  cpf: string;
  email: string;
  cell: string;
  password: string;
  profile_path?: string | null;
}
export interface IPublication {
  _id: string;
  title: string;
  category: string;
  description: string;
  opening_date: string;
  closing_date: string | null;
  owner: {
    _id: string;
    complete_name: string;
    cell: string;
    profile: string | null;
    cpf: string;
  };
  status: {
    opened: boolean;
    was_delivered: boolean;
    was_received: boolean;
  };
  photos_paths: string[];
  collect_receipt: string;
}
export interface IProfileImg {
  preview: string;
  raw: File | null;
}
export interface IPublicationImgs {
  preview: string;
  raw: File | null;
}
export interface ICoordenates {
  lat: number;
  lng: number;
}
