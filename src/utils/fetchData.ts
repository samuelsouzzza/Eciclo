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
    number: number;
    cep: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  password: string;
}
export const fetchDataUsers = async (url: string): Promise<User[]> => {
  const response = await fetch(`${url}`);
  const json = await response.json();
  return json;
};
